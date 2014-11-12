using Autofac;
using Autofac.Core;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Common.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Emix.Web
{
    public static class AutofacConfig
    {
        public class LoggingModule : IModule
        {


            static void OnComponentPreparing(object sender, PreparingEventArgs e)
            {
                var t = e.Component.Activator.LimitType;
                e.Parameters = e.Parameters.Union(new[]
                {
                    new ResolvedParameter((p, i) => p.ParameterType == typeof(ILog), (p, i) => LogManager.GetLogger(t))
                });
            }

            public void Configure(IComponentRegistry componentRegistry)
            {
                componentRegistry.Registered += (s, e) =>
                {
                    e.ComponentRegistration.Preparing += OnComponentPreparing;
                };
            }
        }

        public static void Configure(HttpConfiguration config)
        {
            var builder = new ContainerBuilder();

            //Manually configure implementations
            builder.RegisterModule<LoggingModule>();

            //Register WebApiController and standard Controllers
            builder.RegisterControllers(Assembly.GetExecutingAssembly());
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            

            //builder.RegisterType<ClassThatNeedsILog>().AsImplemen‌​tedInterfaces();
            //builder.Register(c => LogManager.GetLogger(typeof(string))).As<ILog>();


            //create container
            var container = builder.Build();

            //set dependency resolvers
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }
    }
}