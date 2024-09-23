import React from 'react';
import '../BookDetails.css';

const NexusHarari = () => (
    <main className="book-details-content">
        <h1 className="book-title">Nexus</h1>
        <img src={"/nexus_harari.jpg"} alt="Nexus" className="book-image" />
        <div className="book-details">
            <h2>About the Book</h2>
            <p>
                Yuval Noah Harari’s book <span className="bold-text">Nexus: A Brief History of Information Networks from the Stone Age to AI</span>,
                published on September 10, <span className="bold-text">2024</span>, has me particularly excited.
                As a huge fan of Harari’s work, having read all of his books, this release feels especially
                relevant given my deep interest in the subject matter. If you’re familiar with his previous works,
                you can't miss his bestseller, Sapiens: A Brief History of Humankind, which remains a standout.
            </p>
            <h3>About the Author</h3>
            <p>
                Prof. Yuval Noah Harari is a historian, philosopher and the global bestselling
                author of "Sapiens: A Brief History of Humankind", "Homo Deus: A Brief History of Tomorrow",
                "21 Lessons for the 21st Century". His books have sold over 45 million copies in 65 languages,
                with Sapiens alone selling 25 million copies since it was first published in 2013.
                A New York Times and Sunday Times #1 bestseller, Sapiens spent an incredible 96 consecutive
                weeks in the top 3 of the Sunday Times bestseller list. Yuval Noah Harari is also behind
                Sapienship – an international social impact company focused on education and storytelling,
                which he co-founded with his husband Itzik Yahav. Harari is considered one of the world’s
                most influential public intellectuals today.
            </p>
            <h2>Book Summary</h2>
            <h3>Prologue</h3>
            <p>
                In the prologue the subject of the book is presented. Harari begin by what he had previously
                stated in his books: the idea that large human societies are held together by shared stories,
                religions, and ideologies, which allowed humans to cooperate in larger groups than any
                other species. Humans now have accumulated a lot of information and power. However, that
                didn't give us answers to the big questions of life and what is our purpose. </p>
            <p>
                The naive view of information is that it brings truth, which in turn brings wisdom and power. So,
                it holds the Google statement "to organize the world's information and make it universally
                accessible and useful".
            </p>
            <h3>Chapter I - What is information</h3>
            <p>
                The naive view of information considers it as everything that people can use to discover the truth.
                This view links information to truth,it is a way to represent reality.
                However, this book holds that most information is not an attempt to represent reality but
                something else.
            </p>
            <p>
                What is truth? It is something that accurately represent certain aspects of reality.
                One condition for truth is universalism: there exists only one reality. However, it is complex.
                Information is a representation of reality, which can be true or false. Surely is inaccurate: we
                should have a 1:1 map to have 100% accuracy, as FS blog reminds that <a
                href="https://fs.blog/map-and-territory/" target="_blank">The map is not the territory</a>.
                Information has the role of create new realities by tying together disparate things.
                It is a social nexus.
            </p>
            <p>
                    <span className="citation">"Homo sapiens didn't conquer the world because we are talented at turning
                    information into an accurate map of reality. Rather, the secret of our success is that we are
                    talented at using information to connect lots of individuals."</span>
            </p>
            <h3>
                Chapter II - Stories: Unlimited Connections
            </h3>
            <p>
                Sapiens rule the world because we cooperate flexibly in large numbers. This can be achieved
                thanks to <span className="bold-text">stories</span>. They create <span
                className="italic-text">intersubjective reality</span>. For instance, states and currencies.
            </p>
            <p>
                The <span className="italic-text"> naive view of information</span> is that information is seen as directly leading to truth,
                which then branches into wisdom and power. This suggests a linear, almost idealistic progression:
                gaining information leads to uncovering truth, which then naturally confers both wisdom and power.
                A more complete historical view of information says that <span className="bold-text">
                information still leads to truth but also gives rise to order, implying that information
                helps establish systems or structures</span>. From this foundation, both truth and order then
                branch out, with truth leading to wisdom and power, and order similarly feeding into the
                development of power. This second view emphasizes the role of order in shaping power, reflecting
                historical realities where control over information and systems has often been key to wielding
                power.
            </p>
            <h3>Chapter III - Documents: The Bite of the Paper Tigers</h3>
            <p>
                Lists are necessary to brings story into reality. However, Sapens can easily remember stories,
                but not lists. As Kendall Haven states in his "<span className="italic-text">Story Proof:
                The Science Behind the Startling Power of Story</span>:
                <span className="citation">research overwhelmingly, convincingly, and without opposition
                provides the evidence [that stories are a highly efficient] vehicle for communicating
                factual, conceptual, emotional, and tacit information.</span>
                Written documents were then used to store information in form of lists. As stories,
                written documents can be false, but their power is in creating intersubjective reality.
                Every new information technology has bottlenecks. It solves some problems but creates new
                ones. Written documents create the problem of document retrieval. Bureaucracy is the answer
                to the retrieval problem. What is bureaucracy? Its main principle is divide and conquer,
                so it sacrifice truth for order.
                <span className="citation">Reducing the messiness of reality to a limited number of fixed
                drawers helps bureaucrats keep order, but it comes at the expense of truth.</span>
                Bureaucracy strengthen the power of central authority and increase the gap between rulers
                and ruled, even when benign.
            </p>
            <h3>Chapter IV - Errors: The Fantasy of Infallibility</h3>
            <p>
                If humans are prone to error, how can we trust self-correcting mechanisms? Religion often removed humans
                from the equation, portraying God as infallible. Yet, this ultimately led to relying on the judgment of
                certain individuals. In this sense, books are technologies to bypass human fallibility, but failed at that.
                The history of witch hunts demonstrates that it is not more information that lead to truth. The driving force
                of the scientific revolution was the self-correcting mechanism of scientific institutions, and not the
                invention of printer.
                <span className="citation">What makes scientific self-correcting mechanisms particularly strong is that
		scientific institutions are not just willing to admit institutional error and ignorance; they are actively
		seeking to expose them.</span>
                This can be viewed also in the "publish or perish" principle: who brings innovation is awarded.
                The flow of information balances the trade-off between truth and order. Self-correcting mechanism of scientific
                institutions was possible because they leave the job of preserving the social order to other insitutions. Can these
                other institutions have a self-correcting mechanism?
            </p>
        </div>
    </main>
);

export default NexusHarari;
