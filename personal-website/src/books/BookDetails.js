import React from 'react';
import { useParams } from 'react-router-dom';
import NexusHarari from './booksDetails/NexusHarari';
// Import all the book components here

const BookDetails = () => {
    const { bookName } = useParams();

    const renderBook = () => {
        switch (bookName) {
            case 'nexus_harari':
                return <NexusHarari />;
            // Add cases for other books
            default:
                return <p>Book not found.</p>;
        }
    };

    return <>{renderBook()}</>;
};

export default BookDetails;
