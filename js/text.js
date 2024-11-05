// Dicionário de textos em diferentes idiomas
const translations = {
    en: {
        capa_1: "Senior Advisory",
        capa_2: "Consulting",
        capa_3: "Mentoring",
        capa_4: "Key Notes",
        title_impact: "Impact",
        impact: "Zimmermann helps organizations and people build resilient cultures and business cases to be future-ready and successful. \n• HR and Digital Transformation \n• Organizational Change and Change Management \n• Strategic Workforce Planning and Development\n• Talent and Skills Management \n • Contract and Partner Management for Ecosystems\n • Thought Leadership \n• International, Multi-generational Leadership",
        title_experience: "Experience",
        experience: "With over 20 years of global experience in strategic and operational people management as well as digitalization, Zimmermann has led teams and organizations through transformations and developed innovative solutions. Through leadership roles in corporations and consulting, he has developed a holistic perspective and diverse approaches for sustainable success. \n\nHe creates and leads change by combining a data-driven, entrepreneurial view with an empathetic approach.",
        title_insight: "Insight",
        insight: "As a Thought Leader, Zimmermann engages with leadership, the potential of digitalization and the development of the workplace - as well as its implementation. \n\nHe speaks regularly as an international keynote speaker and looks back on future-guiding research and studies, including collaboration with associations such as: WFPMA, WEF, EAPM, ABSL, DGFP, SDW, ABRH, SEBRAE.",
        parallax1:"Digital and AI transformation starts with people – not with technology.",
        parallax2:"Multigenerational leadership is key to sucess and survival of your business.",
        parallax3:"When you start appreciating the individuals, you enable true change and improve your business case.",
        legal_notice_call:"Legal Notice",
        legal_notice:"Information according to § 5 TMG:",
        adress:"Seestraße 33 \n 14624 Dallgow-Döberitz, Germany",
        menuSup:"Senior Advisory • Consulting • Mentoring • Key Notes",
        contact:"Contact"
    },
    pt: {
        capa_1: "Assessoria Executiva",
        capa_2: "Consultoria",
        capa_3: "Mentoria",
        capa_4: "Palestras",
        title_impact: "Impacto",
        impact: "Zimmermann ajuda organizações e pessoas a construir culturas resilientes e business cases para estarem preparadas para o futuro e terem sucesso. \n • Transformação de RH e Digital \n• Transformação Organizacional e Gestão de Mudanças \n• Planejamento Estratégico e Desenvolvimento das Pessoas\n• Gestão de talentos e competências  \n• Gestão de Contratos e Parcerias para Ecossistemas \n • Thought Leadership\n • Liderança Internacional e Multigeracional",
        title_experience: "Experiência",
        experience: "Com mais de 20 anos de experiência global em gestão estratégica e operacional de pessoas, além de digitalização, Zimmermann liderou equipes e organizações através de transformações e desenvolveu soluções inovadoras. Através de papéis de liderança em corporações e consultoria, ele desenvolveu uma perspectiva holística e abordagens diversas para sucesso sustentável. \n\nEle cria e lidera mudanças ao combinar uma visão empreendedora orientada por dados com uma abordagem empática.",
        title_insight: "Visão",
        insight: "Como um Thought Leader, Zimmermann se envolve com a liderança, o potencial da digitalização e o desenvolvimento do mundo de trabalho — assim como com sua implementação. \n\nEle fala regularmente como palestrante internacional e olha para trás em pesquisas e estudos voltados para o futuro, incluindo colaborações com associações como: WFPMA, WEF, EAPM, ABSL, DGFP, SDW, ABRH, SEBRAE.",
        parallax1:"Transformação digital e IA começa com as pessoas – não com a tecnologia.",
        parallax2:"Lideranca multigeracional é chave para o sucesso e a sobrevivência em negócios.",
        parallax3:"Quando você começa a valorizar o indivíduo, você permite uma verdadeira mudança e melhora os seus resultados.",        
        legal_notice_call:"Aviso Legal",
        legal_notice:"Informações de acordo com § 5 TMG:",
        adress:"Seestraße 33 \n 14624 Dallgow-Döberitz, Alemanha",
        menuSup:"Assessoria Executiva • Consultorias • Mentorias • Palestras",
        contact:"Contato"
    },
    deu: {
        capa_1: "Senior Advisory",
        capa_2: "Consulting",
        capa_3: "Mentoring",
        capa_4: "Key Notes",
        title_impact: "Impact",
        impact: "Zimmermann hilft Organisationen und Menschen, resiliente Kulturen und Business Cases zu entwickeln, um zukunftsfähig und erfolgreich zu sein.\n • HR- und Digital-Transformation \n• Organisationale Veränderung und Change Management \n• Strategische Personalplanung und -entwicklung\n• Talent- und Kompetenzmanagement  \n• Verhandlungs- und Partnermanagement für Ecosysteme\n • Thought Leadership \n• Internationale, Multi-generationale Führung",
        title_experience: "Erfahrung",
        experience: "Mit über 20 Jahren globaler Erfahrung in strategischem und operativem Personalmanagement sowie Digitalisierung hat Zimmermann Teams und Organisationen durch Transformationen geführt und innovative Lösungen entwickelt. Durch Führungsrollen im Konzern und in der Beratung hat er einen ganzheitlichen Blick und vielseitige Ansätze für nachhaltigen Erfolg entwickelt. \n\nEr erzeugt und leitet Veränderung, indem er einen datengetriebenen Unternehmerblick mit empathischer Vorgehensweise kombiniert.",
        title_insight: "Insight",
        insight: "Als Thought Leader befasst sich Zimmermann mit Leadership, dem Potenzial von Digitalisierung und der Weiterentwicklung der Arbeitswelt - sowie Wegen der Umsetzung. \n\nEr ist regelmäßig als internationaler Keynote Speaker tätig und blickt auf zukunftsweisende Forschung und Studien zurück, darunter Zusammenarbeit mit Verbänden wie: WFPMA, WEF, EAPM, ABSL, DGFP, SDW, ABRH, SEBRAE.",
        parallax1:"Digitale und AI Transformation beginnt mit dem Menschen – nicht mit der Technologie.",
        parallax2:"Multigenerationale Führung ist ein Schlüssel zum Erfolg und unternehmerischem Überleben.",
        parallax3:"Wenn man das Individuum wertzuschätzen beginnt, ermöglicht man echten Wandel und verbessert das Geschäftsergebnis.",
        legal_notice_call:"Impressum",
        legal_notice:"Angaben gemäß § 5 TMG:",
        adress:"Seestraße 33 \n 14624 Dallgow-Döberitz, Deutschland",
        menuSup:"Senior Advisory • Consulting • Mentoring • Key Notes",
        contact:"Kontakt"
    }
};


// Função para mudar o idioma
function setLanguage(language) {
    const capa_1 = document.getElementById('capa_1');
    const capa_2 = document.getElementById('capa_2');
    const capa_3 = document.getElementById('capa_3');
    const capa_4 = document.getElementById('capa_4');
    const title_impact = document.getElementById('title_impact');
    const impact = document.getElementById('impact');
    const title_experience = document.getElementById('title_experience');
    const experience = document.getElementById('experience');
    const title_insight = document.getElementById('title_insight');
    const insight = document.getElementById('insight');
    const parallax1 = document.getElementById('parallax1');
    const parallax2 = document.getElementById('parallax2');
    const parallax3 = document.getElementById('parallax3');
    const legal_notice_call = document.getElementById('legal_notice_call');
    const legal_notice = document.getElementById('legal_notice');
    const adress = document.getElementById('adress');
    const menuSup = document.getElementById('menuSup');
    const contact = document.getElementById('contact');


    impact.innerHTML = translations[language].impact.replace(/\n/g, '<br>');
    experience.innerHTML = translations[language].experience.replace(/\n/g, '<br>');
    insight.innerHTML = translations[language].insight.replace(/\n/g, '<br>');
    menuSup.innerHTML = translations[language].menuSup.replace(/\n/g, '<br>');
    adress.innerHTML = translations[language].adress.replace(/\n/g, '<br>');
    
  

    // Atualiza os textos com base no idioma selecionado
    capa_1.textContent = translations[language].capa_1;
    capa_2.textContent = translations[language].capa_2;
    capa_3.textContent = translations[language].capa_3;
    capa_4.textContent = translations[language].capa_4;
    title_impact.textContent = translations[language].title_impact;
    // impact.textContent = translations[language].impact;
    title_experience.textContent = translations[language].title_experience;
    // experience.textContent = translations[language].experience;
    title_insight.textContent = translations[language].title_insight;
    // insight.textContent = translations[language].insight;
    parallax1.textContent = translations[language].parallax1;
    parallax2.textContent = translations[language].parallax2;
    parallax3.textContent = translations[language].parallax3;
    legal_notice_call.textContent = translations[language].legal_notice_call;
    legal_notice.textContent = translations[language].legal_notice;
    contact.textContent = translations[language].contact;
    // teste.textContent = translations[language].teste;

    
    


    // Opcional: Salva a preferência do usuário no localStorage
    localStorage.setItem('language', language);
}

// Verifica se há um idioma salvo no localStorage e define o idioma padrão
window.onload = function () {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
};
