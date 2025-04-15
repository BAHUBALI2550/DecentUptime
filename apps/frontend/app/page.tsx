// "use client"

// import React, { useEffect, useState } from 'react';
// import { Activity, Bell, Clock, Server, ArrowRight, Check, Moon, Sun } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200">
//       {/* Hero Section */}
//       <section className="container mx-auto px-6 py-16 md:py-24">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
//               Monitor Your Services with Confidence
//             </h1>
//             <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
//               Get instant alerts when your services go down. Monitor uptime, performance, and ensure your business never misses a beat.
//             </p>
//             <div className="mt-8 flex space-x-4">
//               <button onClick={() => router.push('/dashboard')} className="px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition flex items-center">
//                 Start Monitoring
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
//               <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition dark:text-white">
//                 View Demo
//               </button>
//             </div>
//           </div>
//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
//               alt="Dashboard"
//               className="rounded-lg shadow-2xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section id="features" className="bg-gray-50 dark:bg-gray-800/50 py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
//             Everything you need for reliable monitoring
//           </h2>
//           <div className="grid md:grid-cols-3 gap-12">
//             <FeatureCard
//               icon={<Bell className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
//               title="Instant Alerts"
//               description="Get notified immediately when your services experience downtime through multiple channels."
//             />
//             <FeatureCard
//               icon={<Clock className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
//               title="24/7 Monitoring"
//               description="Round-the-clock monitoring from multiple locations worldwide."
//             />
//             <FeatureCard
//               icon={<Server className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
//               title="Detailed Reports"
//               description="Comprehensive reports and analytics to track your service performance."
//             />
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section id="pricing" className="py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
//             Simple, transparent pricing
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <PricingCard
//               title="Starter"
//               price="29"
//               features={[
//                 "10 monitors",
//                 "1-minute checks",
//                 "Email notifications",
//                 "5 team members",
//                 "24h data retention"
//               ]}
//             />
//             <PricingCard
//               title="Professional"
//               price="79"
//               featured={true}
//               features={[
//                 "50 monitors",
//                 "30-second checks",
//                 "All notification channels",
//                 "Unlimited team members",
//                 "30-day data retention",
//                 "API access"
//               ]}
//             />
//             <PricingCard
//               title="Enterprise"
//               price="199"
//               features={[
//                 "Unlimited monitors",
//                 "15-second checks",
//                 "Priority support",
//                 "Custom solutions",
//                 "90-day data retention",
//                 "SLA guarantee"
//               ]}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2">
//                 <Activity className="h-6 w-6 text-indigo-400" />
//                 <span className="text-xl font-bold">UptimeGuard</span>
//               </div>
//               <p className="mt-4 text-gray-400">
//                 Keeping your services online, always.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Product</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white">Features</a></li>
//                 <li><a href="#" className="hover:text-white">Pricing</a></li>
//                 <li><a href="#" className="hover:text-white">API</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Company</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white">About</a></li>
//                 <li><a href="#" className="hover:text-white">Blog</a></li>
//                 <li><a href="#" className="hover:text-white">Careers</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Legal</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white">Privacy</a></li>
//                 <li><a href="#" className="hover:text-white">Terms</a></li>
//                 <li><a href="#" className="hover:text-white">Security</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
//             <p>&copy; 2025 UptimeGuard. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// function FeatureCard({ icon, title, description }) {
//   return (
//     <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
//       <p className="text-gray-600 dark:text-gray-300">{description}</p>
//     </div>
//   );
// }

// function PricingCard({ title, price, features, featured = false }) {
//   return (
//     <div className={`p-8 rounded-lg ${
//       featured
//         ? 'bg-indigo-600 text-white ring-4 ring-indigo-300 dark:ring-indigo-500'
//         : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
//     }`}>
//       <h3 className="text-xl font-semibold mb-4">{title}</h3>
//       <div className="mb-6">
//         <span className="text-4xl font-bold">${price}</span>
//         <span className="text-sm">/month</span>
//       </div>
//       <ul className="space-y-3 mb-8">
//         {features.map((feature, index) => (
//           <li key={index} className="flex items-center space-x-2">
//             <Check className="h-5 w-5" />
//             <span>{feature}</span>
//           </li>
//         ))}
//       </ul>
//       <button
//         className={`w-full py-3 rounded-lg transition ${
//           featured
//             ? 'bg-white text-indigo-600 hover:bg-gray-100 dark:hover:bg-gray-200'
//             : 'bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600'
//         }`}
//       >
//         Get Started
//       </button>
//     </div>
//   );
// }

// export default App;






"use client"
import React, { useEffect, useState } from 'react';
import { Activity, ArrowRight, Moon, Sun, Check, Bell, Clock, Server } from 'lucide-react';
import { useRouter } from 'next/navigation';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  const images = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=400&q=80",
    "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800&h=400&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&h=400&q=80",
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&h=400&q=80",
    "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&h=400&q=80"
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const FloatingShapes = () => {
    return (
      <div className="floating-shapes">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="shape"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200 relative overflow-hidden">
      {/* Background Animations */}
      <div className="background-animation bg-indigo-400 dark:bg-indigo-600 w-[800px] h-[800px] -top-96 -left-48" />
      <div className="background-animation bg-purple-400 dark:bg-purple-600 w-[600px] h-[600px] top-1/2 -right-48" />
      <div className="background-animation bg-blue-400 dark:bg-blue-600 w-[500px] h-[500px] bottom-0 left-1/4" />
      <FloatingShapes />


      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-float">
              Streamline Your Development Workflow
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              Automate your development pipeline, collaborate seamlessly, and ship faster with our integrated platform.
            </p>
            <div className="mt-10">
              <button onClick={() => router.push('/dashboard')} className="px-8 py-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition flex items-center mx-auto hover:scale-105 transform duration-200">
                Start Monitoring
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Everything you need for seamless development
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Bell className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="Smart Notifications"
              description="Get intelligent alerts about your development pipeline and deployment status."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="Real-time Monitoring"
              description="Monitor your applications 24/7 with comprehensive performance tracking."
            />
            <FeatureCard
              icon={<Server className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="Advanced Analytics"
              description="Get detailed insights into your development process and team performance."
            />
          </div>
        </div>
      </section>

      {/* Image Slideshow */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-800/50">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Trusted by Leading Teams
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of development teams who trust  to streamline their workflow
          </p>
        </div>
        <div className="slideshow-container">
          <div className="slideshow-track">
            {[...images, ...images].map((image, index) => (
              <div
                key={index}
                className="image-card min-w-[300px] h-[400px] relative group"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Choose the perfect plan for your team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="29"
              features={[
                "Up to 5 team members",
                "Basic CI/CD pipeline",
                "5 concurrent builds",
                "Community support",
                "Basic analytics"
              ]}
            />
            <PricingCard
              title="Professional"
              price="79"
              featured={true}
              features={[
                "Up to 15 team members",
                "Advanced CI/CD pipeline",
                "15 concurrent builds",
                "Priority support",
                "Advanced analytics",
                "Custom integrations"
              ]}
            />
            <PricingCard
              title="Enterprise"
              price="199"
              features={[
                "Unlimited team members",
                "Custom CI/CD solutions",
                "Unlimited concurrent builds",
                "24/7 dedicated support",
                "Custom analytics",
                "SLA guarantee"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <Activity className="h-6 w-6 text-indigo-400" />
                <span className="text-xl font-bold">DecentUptime</span>
              </div>
              <p className="mt-4 text-gray-400">
                Empowering developers to build better software.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function PricingCard({ title, price, features, featured = false }) {
  return (
    <div className={`p-8 rounded-lg transform hover:scale-105 transition duration-300 ${featured
      ? 'bg-indigo-600 text-white ring-4 ring-indigo-300 dark:ring-indigo-500'
      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
      }`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-sm">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Check className="h-5 w-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-lg transition transform hover:scale-105 ${featured
          ? 'bg-white text-indigo-600 hover:bg-gray-100 dark:hover:bg-gray-200'
          : 'bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600'
          }`}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;