import React from 'react';

import { Container } from './styles';

export default function Post({ title, description }) {
  return (
    <Container>
      <h2>{title}</h2>
      <small>{description}</small>
    </Container>
  );
}