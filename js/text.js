// Dicionário de textos em diferentes idiomas
const translations = {
    en: {
        title1: "Digital and AI transformation starts with people – not with technology",
        title2: "Multigenerational leadership is key to sucess and survival of your business",
        title3: "Tranformation failure stops When you start appreciating the individuals with empathetic change management",
        title4: "True innovation begins with human insight, technology is just the tool to bring it to life.",
        about: "With global experience and deep expertise in strategic and operational people management as well as digitalization, Dr. Philipp Zimmermann has led teams and organizations through significant transformations and developed innovative HR solutions. As a Thought Leader, he engages with the leadership, the potential of digitalization and the development of the workplace - as well as its pragmatic implementation. He creates and leads change by combining a data-driven, entrepreneurial view with an empathetic approach.With an inclusive leadership approach, Zimmermann helps organizations and people to be future-ready and successful."
    },
    pt: {
        title1: "Transformação digital e IA começa com as pessoas – não com a tecnologia",
        title2: "Lideranca multigeracional é chave para o sucesso e a sobrevivência em negócios ",
        title3: "Faliar na transformação para quando você começa a apreciar o indivíduo com gestão de mudança empática",
        title4: "A verdadeira inovação começa com a percepção humana, a tecnologia é apenas a ferramenta para dar vida a isso.",
        about: "Com experiência global e profundo conhecimento em gestão estratégica e operacional de pessoas, além de digitalização, o Dr. Philipp Zimmermann liderou equipes e organizações através de transformações significativas e desenvolveu soluções inovadoras de RH. Como um Thought Leader, ele se envolve com a liderança, o potencial da digitalização e o desenvolvimento do mundo de trabalho — assim como com sua implementação pragmática. Ele cria e lidera mudanças ao combinar uma visão empreendedora orientada por dados com uma abordagem empática. Com uma abordagem de liderança inclusiva, Zimmermann ajuda organizações e pessoas a estarem preparadas para o futuro e a terem sucesso."
    },
    deu: {
        title1: "Digitale und AI Transformation beginnt mit dem Menschen - nicht mit der Technologie",
        title2: "Multigenerationale Führung ist ein Schlüssel zum Erfolg und unternehmerischem Überleben",
        title3: "Erfolglose Transformation endet, wenn man das Individuum mit empathischen Change Management wertschätzt",
        title4: "Wahre Innovation beginnt mit menschlicher Einsicht – die Technologie ist nur das Werkzeug, um sie zum Leben zu erwecken.",
        about: "Mit globaler Erfahrung und fundierter Expertise im strategischen und operativen Personalmanagement sowie in Digitalisierung hat Dr. Philipp Zimmermann Teams und Organisationen durch bedeutende Transformationen geführt und innovative HR-Lösungen entwickelt.Als Thought Leader befasst er sich mit Leadership, dem Potenzial von Digitalisierung und der Weiterentwicklung der Arbeitswelt - sowie pragmatischen Wegen der Umsetzung. Er erzeugt und leitet Veränderung, indem er einen datengetriebenen Unternehmerblick mit empathischer Vorgehensweise kombiniert. Mit seinem inklusiven Führungsansatz hilft Zimmermann Organisationen und Menschen zukunftsfähig ausrichten und erfolgreich machen."
    }
};

// Função para mudar o idioma
function setLanguage(language) {
    const title1 = document.getElementById('title1');
    const title2 = document.getElementById('title2');
    const title3 = document.getElementById('title3');
    const title4 = document.getElementById('title4');

    const about = document.getElementById('about');

    // Atualiza os textos com base no idioma selecionado
    title1.textContent = translations[language].title1;
    title2.textContent = translations[language].title2;
    title3.textContent = translations[language].title3;
    title4.textContent = translations[language].title4;

    about.textContent = translations[language].about;

    // Opcional: Salva a preferência do usuário no localStorage
    localStorage.setItem('language', language);
}

// Verifica se há um idioma salvo no localStorage e define o idioma padrão
window.onload = function () {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
};
