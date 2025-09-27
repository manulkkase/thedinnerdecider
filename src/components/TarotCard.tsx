import React from 'react';
import { CardInfo } from '../types/tarotTypes.ts';
interface CardProps {
  cardInfo: CardInfo;
  onSelect: (id: string) => void;
  isSelected: boolean;
  isRevealed: boolean;
}

const Card: React.FC<CardProps> = ({ cardInfo, onSelect, isSelected, isRevealed }) => {

  const styles: { [key: string]: React.CSSProperties } = {
    cardContainer: {
      perspective: '1000px',
      width: '150px',
      height: '220px',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'transparent',
    },
    cardInner: {
      position: 'relative',
      width: '100%',
      height: '100%',
      transition: 'transform 0.6s',
      transformStyle: 'preserve-3d',
      transform: isRevealed ? 'rotateY(180deg)' : 'rotateY(0deg)',
    },
    cardFace: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: isSelected ? '0 0 25px #B889FF' : '0 4px 15px rgba(0, 0, 0, 0.4)',
      transition: 'all 0.3s ease',
      border: '2px solid #332f44'
    },
    cardFront: {
      backgroundColor: '#171423',
      color: '#E0E0E0',
      transform: 'rotateY(180deg)',
    },
    cardBack: {
      backgroundColor: '#171423',
      border: '2px solid #332f44',
      backgroundImage: `url('/images/card.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '10px',
    },
  };

  return (
    <div
      style={styles.cardContainer}
      onClick={() => onSelect(cardInfo.id)}
    >
      <div style={styles.cardInner}>
        <div style={{ ...styles.cardFace, ...styles.cardBack }}>
        </div>
        <div style={{ ...styles.cardFace, ...styles.cardFront }}>
          <img src={cardInfo.imageUrl} alt={cardInfo.name} style={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Card;