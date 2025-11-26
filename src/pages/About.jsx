import React from "react";

const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-16">

       <section>
        <h2 className="text-3xl text-white font-bold mb-4">Merhaba!</h2>
        
        <p className="text-gray-300 leading-relaxed indent-8 mb-4">
          Ben <span className="font-semibold">Esma Nur Solmaz</span>.  
          Full-stack uygulamalar geliştiren bir yazılım geliştiricisiyim. Web, mobil ve masaüstü projelerinde modern teknolojilerle üretken çözümler geliştiriyorum. 
          Uygulamaların tasarımından veritabanına kadar tüm süreçlerinde görev almayı seviyorum.
        </p>

        <p className="text-gray-300 leading-relaxed indent-8">
          Kullanıcı deneyimine önem veren, sürekli öğrenmeye odaklanmış bir geliştiriciyim.  
          Bu portfolyo içerisinde geliştirdiğim web, mobil ve masaüstü projelerini bulabilirsiniz.
        </p>
      </section>

      <section>
        <h2 className="text-2xl text-white font-bold mb-6">Beceriler</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-300">
          <div className="p-4 bg-slate-900 rounded-xl text-center font-medium">JavaScript</div>
          <div className="p-4 bg-slate-900 rounded-xl text-center font-medium">C#</div>
          <div className="p-4 bg-slate-900 rounded-xl text-center font-medium">Node.js</div>
          <div className="p-4 bg-slate-900 rounded-xl text-center font-medium">.NET / ASP.NET</div>
          <div className="p-4 bg-slate-900 rounded-xl text-center font-medium">React</div>
          <div className="p-4 bg-slate-900 rounded-xl text-center font-medium">Python</div>
        </div>
      </section>

    </div>
  );
};

export default About;
