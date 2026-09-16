import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url = 'https://api.unsplash.com/search/photos?client_id=eNwmk96QxnQK5_ZBOB59gl2usGWRr0uc_7rUKjuECJQ&query=dogs';

const Gallery = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
    }
  });

  if (isLoading) {
    return <section className="image-container"><h4>Loading...</h4></section>;
  }

  if (error) {
    return <section className="image-container"><h4>Error: {error.message}</h4></section>;
  }
  const results = data.results;
  if (!results || results.length === 0) {
    return <section className="image-container"><h4>No se encontraron imágenes.</h4></section>;
  }

  return (
    <section className="image-container">
      {data.results.map((image) => (
        <img key={image.id} src={image?.urls.small} alt={image.alt_description} />
      ))}
    </section>
  );
}

export default Gallery