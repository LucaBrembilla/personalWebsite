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
        </div>
    </main>
);

export default NexusHarari;
