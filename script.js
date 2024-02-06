document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
// Προσθέτουμε event listener σε κάθε σύνδεσμο του μοντάλ
document.querySelectorAll('#modal ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });
});
// Προσθήκη κώδικα για τον έλεγχο της αλληλεπίδρασης με τις φωτογραφίες
const services = document.querySelectorAll('.our-services1');

services.forEach(service => {
    service.addEventListener('mouseover', () => {
        service.querySelector('img').style.transform = 'scale(0.9)';
    });

    service.addEventListener('mouseout', () => {
        service.querySelector('img').style.transform = 'scale(1)';
    });

    service.addEventListener('click', () => {
        const imageUrl = service.querySelector('img').src;
        const title = service.querySelector('h3').textContent;
        const description = service.querySelector('p').textContent;
        
        document.getElementById('modal1-image').src = imageUrl;
        openModal1(title, description);
    });
    
});

function openModal1(title, description) {
    document.getElementById('modal1').style.display = 'block';
    document.getElementById('modal1-title').innerHTML = title;
    document.getElementById('modal1-description').innerHTML = description;
    document.getElementById('modal1-description').style.display = 'block'; // Εμφανίστε το κείμενο μόλις ανοίξει το modal
}



function closeModal1() {
    document.getElementById('modal1').style.display = 'none';
}








// Στο script.js
// Στο script.js

// Αρχική επιλεγμένη γλώσσα
var selectedLanguage = 'en';

// Συνάρτηση για την αρχικοποίηση της γλώσσας
function initializeLanguage() {
    var storedLang = localStorage.getItem('selectedLanguage');
    if (storedLang) {
        selectedLanguage = storedLang;
    }
    changeLanguage(selectedLanguage);
}

// Συνάρτηση για την αλλαγή γλώσσας
function changeLanguage(lang) {
    selectedLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);

    var elements = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < elements.length; i++) {
        var key = elements[i].getAttribute('data-lang');
        elements[i].innerHTML = translations[lang][key];
    }
}

// Καλείται κατά τη φόρτωση της σελίδας
document.addEventListener('DOMContentLoaded', function () {
    initializeLanguage();
});

// Χρησιμοποιήστε τη συνάρτηση changeLanguage όπου χρειάζεται, π.χ. όταν γίνεται κλικ σε μια σημαία.



// Υλοποίηση μεταφράσεων ανά γλώσσα
// Στο script.js
var translations = {
    'en': {
        'languageSelect': 'Select Language',
        'english': 'English',
        'greek': 'Ελληνικά',
        'artVibesProductions': 'Art Vibes Productions',
        'menuIcon': '☰',
        'home': 'Home',
        'aboutUs': 'About Us',
        'ourServices': 'Our Services',
        'ourWork': 'Our Work',
        'contactUs': 'Contact Us',
        'welcome': 'Welcome to Art Vibes Productions',
        'intro': 'Your source for creative and artistic content',
        'aboutUs': 'About Us',
        'aboutDescription': 'We are a passionate team dedicated to creating unique and inspiring art. Explore more about our journey',
        'readMore': 'Read More',
        'home': 'Home',
        'intro1': 'Welcome to Art Vibes Productions',
        'intro2': 'Your source for creative and artistic content',
        'ourServices': 'Our Services',
        'servicePhotos': 'Service Photos',
        'artsAdministration': 'Arts Administration',
        'artsAdministrationDescription': 'This involves managing the day-to-day operations of performing arts organizations, including budgeting, financial management, human resources, grant writing, and strategic planning...',
        'productionManagement': 'Production Management',
        'productionManagementDescription': 'Production managers coordinate all logistical aspects of a performance, including scheduling, venue coordination, stage management, technical requirements, and coordinating with artists and crew...',
        'technicalSupport': 'Marketing and Promotion',
        'technicalSupportDescription': 'Promoting performances and attracting audiences is crucial for the success of any performing arts event', 
        'ourWork': 'Our Work',
        'discoverProjects': 'Discover our amazing projects and see how we bring ideas to life',
        'readMore': 'Read More',
        'contactUs': 'Contact Us',
        'getInTouch': 'Get in touch with us and let\'s create something amazing together',
        'contactUsButton': 'Contact Us',
        'about-title': 'About Us',
        'about-text': 'Art Vibes Productions is a creative production company that aims to bring artistry, innovation, and inspiration to the world of media and entertainment. Our philosophy is rooted in the belief that artistic expression has the power to evoke emotions, provoke thoughts, and ignite positive change. ',
        'about-text1': 'At Art Vibes Productions, we are passionate about the power of storytelling and the impact it can have on individuals and society as a whole. We strive to create content that resonates with people on a deep level, pushing boundaries and challenging conventional norms. Our goal is to produce visually stunning, intellectually stimulating, and emotionally engaging work that leaves a lasting impression. ',
        'about-text2': 'As a production company, we specialize in various forms of media, including film, television, digital content, and immersive experiences. We collaborate with talented artists, writers, directors, and technicians to bring our visions to life. Our team is dedicated to excellence and committed to maintaining the highest standards of quality in every project we undertake. ',
        'about-text3':'We value creativity, authenticity, and originality in all aspects of our work. We believe in fostering an environment that encourages innovation and nurtures the talents of our team members. By  embracing diversity and embracing different perspectives, we strive to create content that reflects the richness and complexity of the world we live in.',// Προσθέστε άλλα κλειδιά και μεταφράσεις ανάλογα με τη σελίδα
        'about-text4': 'Art Vibes Productions is dedicated to creating art that moves, enlightens, and entertains. We are driven by a deep passion for storytelling and a commitment to pushing creative boundaries, and we look forward to sharing our unique vision with audiences worldwide.',
        'ourWorkDescription1': 'GRis Festival is a festival from Greece dedicated to showcasing new artists and performers who have a fresh and innovative approach to Greek culture and heritage. With a focus on challenging stereotypes, celebrating diversity, and promoting creativity, this festival is all about bringing people together and fostering a greater understanding and appreciation of different cultures and perspectives.',
        'ourWorkDescription2':'At GRis Festival, you will be re-introduced to Greece as it is today, and to the Greeks who have developed throughout time. This is accomplished through collaborations, the exchange of ideas and perceptions, and through the mixture of all civilizations that have influenced, inspired, and contributed to modern Greek culture as expressed through its various forms of art. Both the creators and the audience have come to leave their mark on this world, express themselves, make all global citizens feel the modern GR vibes, and inspire future artistic waves to come!',
        'ourWorkDescription3':'GRis Festival comprises a diverse range of art forms, including dance performances, photography exhibitions, music concerts, theatrical plays, short film screenings, and food tastings. From the traditional to the avant-garde, there is something for everyone at this exciting and dynamic festival.',// Προσθέστε άλλα κλειδιά και μεταφράσεις ανάλογα με τη σελίδα
        'contactInfo':'For further information or inquiries, please contact us: ',
        'mail':'Email: info@company.com',
        'phone':'Phone: +30 123 456 789',
        'yourName':'Your Name',
        'yourEmail':'Your Email',
        'yourMessage':'Your Message',
        'submit':'Submit',
        'artsAdminDescription':'This involves managing the day-to-day operations of performing arts organizations, including budgeting, financial management, human resources, grant writing, and strategic planning.',
        'marketingPromotionDescription': 'Promoting performances and attracting audiences is crucial for the success of any performing arts event. Marketing professionals develop advertising campaigns, create promotional materials, manage social media platforms, and engage with the press to generate awareness and ticket sales.',
        'marketingAndPromotion':'Marketing and Promotion',
        'educationAndOutreach':'Education and Outreach',
        'educationOutreachDescription':'Many performing arts organizations engage in educational and outreach programs to foster appreciation for the arts and develop future audiences. This can include workshops, masterclasses, school programs, and community initiatives.',
        'fundraisingAndDevelopment':'Artist Management',
        'fundraisingDevelopmentDescription':'Artist managers represent performers, negotiate contracts, and handle logistics such as scheduling, travel arrangements, and accommodations. They act as intermediaries between artists and performing arts organizations.',
        'technicalSupport1':'Event Coordination',
        'technicalSupportDescription1':'Coordinating special events, such as galas, fundraisers, or festivals, requires attention to detail in areas like logistics, programming, vendor management, andguest coordination.',
    


        
        // Προσθέστε άλλα κλειδιά και μεταφράσεις ανάλογα με τη σελίδα
    },

    'el': {
        'languageSelect': 'Επιλογή Γλώσσας',
        'english': 'Αγγλικά',
        'greek': 'Ελληνικά',
        'artVibesProductions': 'Παραγωγές Τεχνών Vibes',
        'menuIcon': '☰',
        'home': 'Αρχική',
        'aboutUs': 'Σχετικά',
        'ourServices': 'Οι Υπηρεσίες μας',
        'ourWork': 'Τα Έργα μας',
        'contactUs': 'Επικοινωνία',
        'intro': 'Η πηγή σας για δημιουργικό και καλλιτεχνικό περιεχόμενο',
        'aboutUs': 'Σχετικά',
        'aboutDescription': 'Είμαστε μια παθιασμένη ομάδα αφοσιωμένη στη δημιουργία μοναδικής και εμπνευσμένης τέχνης. Ανακαλύψτε περισσότερα για το ταξίδι μας',
        'readMore': 'Διαβάστε Περισσότερα',
        'home': 'Αρχική',
        'welcome': 'Καλώς ήρθατε στην Art Vibes Productions',
        'intro2': 'Η πηγή σας για δημιουργικό και καλλιτεχνικό περιεχόμενο.',
        'ourServices': 'Οι Υπηρεσίες Μας',
        'servicePhotos': 'Φωτογραφίες Υπηρεσιών',
        'artsAdministration': 'Διαχείριση Τεχνών',
        'artsAdministrationDescription': 'Αυτό περιλαμβάνει τη διαχείριση των καθημερινών εργασιών των οργανώσεων των παραστατικών τεχνών, συμπεριλαμβανομένου του προϋπολογισμού, της οικονομικής διαχείρισης, του ανθρώπινου δυναμικού, της εγγραφής χορηγιών και του στρατηγικού σχεδιασμού...',
        'productionManagement': 'Διαχείριση Παραγωγής',
        'productionManagementDescription': 'Οι διευθυντές παραγωγής συντονίζουν όλες τις λογιστικές πτυχές μιας παράστασης, συμπεριλαμβανομένου του προγραμματισμού, της συντονισμού του χώρου, της διαχείρισης σκηνής, των τεχνικών απαιτήσεων και του συντονισμού με καλλιτέχνες και πλήρωμα...',
        'technicalSupport': 'Μάρκετινγκ και προώθηση',
        'technicalSupportDescription': 'Η προώθηση παραστάσεων και η προσέλκυση κοινού είναι ζωτικής σημασίας για την επιτυχία οποιασδήποτε εκδήλωσης παραστατικών τεχνών',
        'ourWork': 'Τα Έργα Μας',
        'discoverProjects': 'Ανακαλύψτε τα εκπληκτικά έργα μας και δείτε πώς δίνουμε ζωή στις ιδέες μας',
        'readMore': 'Διαβάστε Περισσότερα',
        'contactUs': 'Επικοινωνία',
        'getInTouch': 'Επικοινωνήστε μαζί μας και ας δημιουργήσουμε κάτι εκπληκτικό μαζί',
        'contactUsButton': 'Επικοινωνία', 
        'about-title': 'Σχετικά',
        'about-text':'Η Art Vibes Productions είναι μια δημιουργική εταιρεία παραγωγής που στοχεύει να φέρει τέχνη, καινοτομία και έμπνευση στον κόσμο των μέσων και της ψυχαγωγίας. Η φιλοσοφία μας έχει τις ρίζες της στην πεποίθηση ότι η καλλιτεχνική έκφραση έχει τη δύναμη να προκαλεί συναισθήματα, να προκαλεί σκέψεις και να πυροδοτεί θετικές αλλαγές.',
        'about-text1':'Στην Art Vibes Productions, είμαστε παθιασμένοι με τη δύναμη της αφήγησης και τον αντίκτυπο που μπορεί να έχει στα άτομα και την κοινωνία στο σύνολό της. Προσπαθούμε να δημιουργούμε περιεχόμενο που να έχει απήχηση στους ανθρώπους σε βαθύ επίπεδο, υπερβαίνοντας τα όρια και αμφισβητώντας τους συμβατικούς κανόνες. Στόχος μας είναι να παράγουμε οπτικά εκπληκτική, πνευματικά διεγερτική και συναισθηματικά συναρπαστική δουλειά που αφήνει μια μόνιμη  εντύπωση.',
        'about-text2':'Ως εταιρεία παραγωγής, ειδικευόμαστε σε διάφορες μορφές μέσων, συμπεριλαμβανομένων ταινιών, τηλεόρασης, ψηφιακού περιεχομένου και καθηλωτικών εμπειριών. Συνεργαζόμαστε με ταλαντούχους καλλιτέχνες, συγγραφείς, σκηνοθέτες και τεχνικούς για να ζωντανέψουμε τα οράματά μας. Η ομάδα μας είναι αφοσιωμένη στην αριστεία και δεσμεύεται να διατηρεί τα υψηλότερα πρότυπα ποιότητας σε κάθε έργο που αναλαμβάνουμε.',
        'about-text3':'Εκτιμούμε τη δημιουργικότητα, την αυθεντικότητα και την πρωτοτυπία σε όλες τις πτυχές της δουλειάς μας. Πιστεύουμε στην προώθηση ενός περιβάλλοντος που ενθαρρύνει την καινοτομία και καλλιεργεί τα ταλέντα των μελών της ομάδας μας. Αγκαλιάζοντας την ποικιλομορφία και υιοθετώντας διαφορετικές προοπτικές, προσπαθούμε να δημιουργήσουμε περιεχόμενο που αντανακλά τον πλούτο και την πολυπλοκότητα του κόσμου στον οποίο ζούμε.',
        'about-text4':'H Art Vibes Productions είναι αφοσιωμένη στη δημιουργία τέχνης που συγκινεί, διαφωτίζει και διασκεδάζει. Οδηγούμαστε από ένα βαθύ πάθος για την αφήγηση και τη δέσμευση να ξεπεράσουμε τα δημιουργικά όρια και ανυπομονούμε να μοιραστούμε το μοναδικό μας όραμα με το κοινό σε όλο τον κόσμο.', 
        'ourWorkDescription1': 'Το GRis Festival είναι ένα φεστιβάλ από την Ελλάδα που αφιερώνεται στην παρουσίαση νέων καλλιτεχνών και εκτελεστών που έχουν μια φρέσκια και καινοτόμο προσέγγιση στον ελληνικό πολιτισμό και την παράδοση. Με έμφαση στο να προκαλεί στερεότυπα, να γιορτάζει την ποικιλομορφία και να προωθεί τη δημιουργικότητα, αυτό το φεστιβάλ αφορά το να φέρνει ανθρώπους μαζί και να προωθεί μια μεγαλύτερη κατανόηση και εκτίμηση των διαφορετικών πολιτισμών και οπτικών.',
        'ourWorkDescription2':'Στο GRis Festival, θα έχετε την ευκαιρία να επαναγνωρίσετε την Ελλάδα όπως είναι σήμερα και τους Έλληνες που έχουν εξελιχθεί μέσα στον χρόνο. Αυτό επιτυγχάνεται μέσω συνεργασιών, της ανταλλαγής ιδεών και αντιλήψεων, και μέσα από τον συνδυασμό όλων των πολιτισμών που έχουν επηρεάσει, εμπνεύσει και συνεισφέρει στον σύγχρονο ελληνικό πολιτισμό, όπως εκφράζεται μέσα από διάφορες μορφές τέχνης του. Τόσο οι δημιουργοί όσο και το κοινό έχουν έλθει για να αφήσουν το στίγμα τους σε αυτόν τον κόσμο, να εκφραστούν, να κάνουν όλους τους παγκόσμιους πολίτες να νιώθουν το σύγχρονο ρυθμό της Ελλάδας και να εμπνεύσουν μελλοντικά κύματα τέχνης!',
        'ourWorkDescription3':'Το GRis Festival περιλαμβάνει μια ποικιλία τεχνών, συμπεριλαμβανομένων χορευτικών παραστάσεων, εκθέσεων φωτογραφίας, συναυλιών μουσικής, θεατρικών παραστάσεων, προβολών σύντομων ταινιών και δοκιμών γεύσης φαγητού. Από το παραδοσιακό έως το προοδευτικό, υπάρχει κάτι για όλους σε αυτό το συναρπαστικό και δυναμικό φεστιβάλ.',
        'contactInfo':'Για περαιτέρω πληροφορίες ή ερωτήσεις, επικοινωνήστε μαζί μας: ',
        'mail':'Email: info@company.com',
        'phone':'Τηλέφωνο: +30 123 456 789',
        'yourName':'Το Οναμά σας',
        'yourEmail':'Το Email σας',
        'yourMessage':'Το Μήνυμα σας',
        'submit':'Υποβολή',
        'artsAdminDescription': 'Περιλαμβάνει τη διαχείριση των καθημερινών λειτουργιών των οργανισμών παραστατικών τεχνών, συμπεριλαμβανομένου του προϋπολογισμού, της οικονομικής διαχείρισης, των ανθρώπινων πόρων, της συγγραφής επιχορηγήσεων και του στρατηγικού σχεδιασμού.',
        'marketingPromotionDescription':'Η προώθηση παραστάσεων και η προσέλκυση κοινού είναι ζωτικής σημασίας για την επιτυχία οποιασδήποτε εκδήλωσης παραστατικών τεχνών. Οι επαγγελματίες του μάρκετινγκ αναπτύσσουν διαφημιστικές καμπάνιες, δημιουργούν διαφημιστικό υλικό, διαχειρίζονται πλατφόρμες μέσων κοινωνικής δικτύωσης και συνεργάζονται με τον Τύπο για να αυξήσουν την ευαισθητοποίηση και τις πωλήσεις εισιτηρίων',
        'marketingAndPromotion':'Μάρκετινγκ και προώθηση',
        'educationAndOutreach':'Εκπαίδευση και προβολή',
        'educationOutreachDescription':'Πολλοί οργανισμοί παραστατικών τεχνών συμμετέχουν σε εκπαιδευτικά προγράμματα και προγράμματα προβολής για να ενθαρρύνουν την εκτίμηση για τις τέχνες και να αναπτύξουν μελλοντικό κοινό. Αυτό μπορεί να περιλαμβάνει εργαστήρια, masterclasses, σχολικά προγράμματα και κοινοτικές πρωτοβουλίες.',
        'fundraisingAndDevelopment':'Διαχείριση καλλιτεχνών',
        'fundraisingDevelopmentDescription':'Οι διευθυντές καλλιτεχνών αντιπροσωπεύουν καλλιτέχνες, διαπραγματεύονται συμβόλαια και χειρίζονται υλικοτεχνική υποστήριξη, όπως προγραμματισμό, ταξιδιωτικές ρυθμίσεις και καταλύματα. Λειτουργούν ως μεσάζοντες μεταξύ καλλιτεχνών και οργανισμών παραστατικών τεχνών.',
        'technicalSupport1':'Συντονισμός εκδηλώσεων',
        'technicalSupportDescription1':'Ο συντονισμός ειδικών εκδηλώσεων, όπως γκαλά, έρανοι ή φεστιβάλ, απαιτεί προσοχή στη λεπτομέρεια σε τομείς όπως η εφοδιαστική, ο προγραμματισμός, η διαχείριση προμηθευτών και ο συντονισμός των προσκεκλημένων.',


    }
};
