import React, { useState, useEffect } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import '../styles/Home.css';
import Testimonial from './Testimonial';

function Home() {
    
    const testimonials1 = [
        {
            name: 'Ioannis Aloukos',
            date: 'πριν από 6 μήνες',
            content: 'Πρόκειται για εξαιρετικό επαγγελματία, ο οποίος δίνει λύσεις σε όποιο ηλεκτρολογικό πρόβλημα προκύψει. Πάντα είνα πρόθυμος για να δώσει απαντήσεις στο τηλέφωνο και είναι συνεπής στα ραντεβού του.'
        },
        {
            name: 'Ivelina Nikolova',
            date: 'πριν από 3 μήνες',
            content: 'Έμεινα πολύ ευχαριστημένη από την γρήγορη και άμεση εξυπηρέτηση… Φοβερή οργάνωση και ποιοτική εργασία και πολύ ευγενέστατος !! Σας ευχαριστώ Κος Γεώργιος Ν. Βλάχος.'
        },
        {
            name: 'Yiouli Boida',
            date: 'πριν από 7 μήνες',
            content: 'Εξαιρετικός και ευγενικός άνθρωπος. Μου χάλασε η ασφάλεια του ψυγείου και ήρθε αμέσως! Σπάνιο πράγμα για τεχνικό. Σε λίγα λεπτά αποκαταστάθηκε το πρόβλημά μου.'
        },
        {
            name: 'ΓΙΩΡΓΟΣ ΕΞΑΚΟΪΔΗΣ',
            date: 'πριν από 6 μήνες',
            content: 'Ο μόνος ίσως ηλεκτρολόγος που έχει έρθει να με βοηθήσει και δεν ζήτησε λεφτά. πολύ καλό παιδί και πάντα σε βοηθάει ότι και να θες.'
        },
        {
            name: 'Emily kelemeni',
            date: 'πριν από 1 χρόνο',
            content: 'Εξαιρετικός επαγγελματίας! Ο κύριος Γιώργος πολύ ευγενικός! Πολύ καλές τιμές, άψογη δουλειά και πολύ άμεσος! Ευχαριστούμε για την συνεργασία!!! Τον συστήνω ανεπιφύλακτα!'
        },
        {
            name: 'Vagelis Tatsis',
            date: 'πριν από 11 μήνες',
            content: 'Εξαίρετος επαγγελματίας. Ευγενεστατος. Άψογος στην δουλειά του. Ανταποκρίθηκε άμεσα αν και ήταν Κυριακή και μάλιστα με καύσωνα. Συνεπεστατος ήρθε στην ώρα του. Βρήκε αμέσως το πρόβλημα και αποκατέστησε την βλάβη. Τον συστήνω ανεπιφύλακτα!'
        },
    ];

    const testimonials2 = [
        {
            name: 'Fotios Gazis',
            date: 'πριν από 1 χρόνο',
            content: 'Εξαιρετικός ο κυριος Γιώργος πάντα πρόθυμος και εργατικός! Άριστες τιμές και τρομερή δουλειά! Τον προτείνω 100%!!!'
        },
        {
            name: 'Efsevios Kontopoulos',
            date: 'πριν από 7 μήνες',
            content: 'Πολύ γρήγορη και αποτελεσματική εξυπηρέτηση. Ήρθε την ίδια μέρα που του τηλεφωνήσαμε για να συνδέσουμε το τηλέφωνο και το wifi μας. Ευχαριστώ'
        },
        {
            name: 'alex papantoniou',
            date: 'πριν από 9 μήνες',
            content: 'Υπέροχος! Άμεση εξυπηρέτηση, με επαγγελματισμο, επίλυση προβλημάτων και υπέροχη συμπεριφορά! Σας ευχαριστούμε πολύ!'
        },
        {
            name: 'panayiotis papadakis',
            date: 'πριν από 1 χρόνο',
            content: 'Πολύ αξιόπιστος συνεπής βρήκε το πρόβλημα άμεσα και μου έκανε και πλήρης αλλαγή πίνακα και καλωδίωση.τον συνιστώ ανεπιφύλακτα'
        },
        {
            name: 'ΑΡΙΣΤΕΑ ΑΝΤΩΝΙΟΥ',
            date: 'πριν από 7 μήνες',
            content: 'Άψογη εξυπηρέτηση, ευγένεια, τυπικότητα, επαγγελματισμός, διάθεση για εξεύρεση πρακτικών λύσεων και τιμές που ανταποκρίνονται στο σήμερα !!! Θα συνεργαζομουν ξανά !!!!'
        },
        {
            name: 'Hlias Papas',
            date: 'πριν από 8 μήνες',
            content: 'Συστήνω τον Γιώργο ανεπιφύλακτα. Με εξυπηρέτησε άμεσα και με προθυμία ημέρα Κυριακή. Γρήγορος , προσεκτικός και έμπειρος.'
        },
    ]

    const chunkTestimonials = (items, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < items.length; i += chunkSize) {
            chunks.push(items.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const [carouselConfig, setCarouselConfig] = useState({
        chunks1: chunkTestimonials(testimonials1, 3),
        chunks2: chunkTestimonials(testimonials2, 3),
        itemsPerSlide: 3,
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1650) {
                setCarouselConfig({
                    chunks1: chunkTestimonials(testimonials1, 3),
                    chunks2: chunkTestimonials(testimonials2, 3),
                    itemsPerSlide: 3,
                });
            } else if (window.innerWidth >= 750) {
                setCarouselConfig({
                    chunks1: chunkTestimonials(testimonials1, 2),
                    chunks2: chunkTestimonials(testimonials2, 2),
                    itemsPerSlide: 2
                });
            }
            else {
                setCarouselConfig({
                    chunks1: chunkTestimonials(testimonials1, 1),
                    chunks2: chunkTestimonials(testimonials2, 1),
                    itemsPerSlide: 1
                });
            }
        };

        handleResize(); // Call on component mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='home'>
            <div className="jumbotron text-center">
                <h1>Γιώργος Βλάχος</h1>
                <p>Ο αξιόπιστος ηλεκτρολόγος σας στον Βύρωνα</p>
                {/* <p>
                    <Button variant="primary" href="#services">Our Services</Button>
                </p> */}
            </div>
            <div className="container mt-5">
                <section id="about">
                    <h2>Ποιός είναι ο Γιώργος Βλάχος;</h2>
                    <p className="about-text">
                        Με πάνω από 20 χρόνια εμπειρίας στον τομέα της ηλεκτρολογίας, ο Γιώργος Βλάχος είναι ένας εξαιρετικός επαγγελματίας που δίνει λύσεις σε όποιο ηλεκτρολογικό πρόβλημα προκύψει. Οι πελάτες του τον περιγράφουν ως ευγενικό, συνεπή και πολύ καλό στη δουλειά του, με πολλοί να τον συνιστούν ανεπιφύλακτα.
                    </p>
                </section>
                <section id="services" className="mt-5">
                    <h2>Υπηρεσίες</h2>
                    <div className="services-list">
                        <div className="service-item">
                            <h3>Οικιακές Ηλεκτρικές Υπηρεσίες</h3>
                            <p>Πλήρης γκάμα ηλεκτρικών υπηρεσιών για το σπίτι σας.</p>
                        </div>
                        <div className="service-item">
                            <h3>Εμπορικές Ηλεκτρικές Υπηρεσίες</h3>
                            <p>Επαγγελματικές ηλεκτρικές υπηρεσίες για την επιχείρησή σας.</p>
                        </div>
                        <div className="service-item">
                            <h3>Επείγουσες Ηλεκτρικές Υπηρεσίες</h3>
                            <p>Διαθέσιμες 24/7 για όλες τις ηλεκτρικές επείγουσες περιπτώσεις.</p>
                        </div>
                        <div className="service-item">
                            <h3>Εγκατάσταση Φωτισμού</h3>
                            <p>Εγκατάσταση εσωτερικών και εξωτερικών λύσεων φωτισμού.</p>
                        </div>
                        <div className="service-item">
                            <h3>Αναβάθμιση Ηλεκτρικών Πινάκων</h3>
                            <p>Αναβαθμίστε τους ηλεκτρικούς πίνακές σας για καλύτερη απόδοση.</p>
                        </div>
                        <div className="service-item">
                            <h3>Ηλεκτρικές Επισκευές</h3>
                            <p>Γρήγορες και αξιόπιστες ηλεκτρικές υπηρεσίες επισκευής.</p>
                        </div>
                    </div>
                </section>
                <section id="testimonials" className="text-center mt-5">
                    <h2 className="section-heading">Αξιολογήσεις πελατών</h2>
                    <div className="testimonials-container">
                        <Carousel className="testimonials-carousel" interval={null}>
                            {carouselConfig.chunks1.map((chunk, index) => (
                                <Carousel.Item key={index}>
                                    <div className="testimonials-grid">
                                        {chunk.map((testimonial, idx) => (
                                            <Testimonial
                                                key={idx}
                                                name={testimonial.name}
                                                date={testimonial.date}
                                                content={testimonial.content}
                                                stars={testimonial.stars}
                                                profilePic={testimonial.profilePic}
                                            />
                                        ))}
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div className="testimonials-container">
                        <Carousel className="testimonials-carousel" interval={null}>
                            {carouselConfig.chunks2.map((chunk, index) => (
                                <Carousel.Item key={index}>
                                    <div className="testimonials-grid">
                                        {chunk.map((testimonial, idx) => (
                                            <Testimonial
                                                key={idx}
                                                name={testimonial.name}
                                                date={testimonial.date}
                                                content={testimonial.content}
                                                stars={testimonial.stars}
                                                profilePic={testimonial.profilePic}
                                            />
                                        ))}
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
