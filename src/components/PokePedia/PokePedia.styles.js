import styled from 'styled-components';

export const StyledGetPokemonWrapper = styled.div`
  width: 75%;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  border-radius: 15px;
`;

export const StyledGetPokemonButton = styled.button`
  width: 20%;
  min-width: 200px;
  color: ${({ theme }) => theme.colors.red};
  margin: 1.5rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.lblue};
  font-weight: 700;
`;

export const StyledPokemonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;

  .poke-name {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: 1;
  }

  .poke-id {
    color: grey;
  }

  .poke-photo {
    // width: 70%;
    // height: 70%;
  }

  .poke-types {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 7px;
    &__each-type {
      margin: 10px;
      padding: 3px 10px;
      border-radius: 6px;
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    .fire {
      color: ${({ theme }) => theme.colors.types.fire};
      background-color: ${({ theme }) => theme.colors.types.fire}33; // 33 added for change bg opacity for 20%
    }
    .water {
      color: ${({ theme }) => theme.colors.types.water};
      background-color: ${({ theme }) => theme.colors.types.water}33;
    }
    .poison {
      color: ${({ theme }) => theme.colors.types.poison};
      background-color: ${({ theme }) => theme.colors.types.poison}33;
    }
    .ice {
      color: ${({ theme }) => theme.colors.types.ice};
      background-color: ${({ theme }) => theme.colors.types.ice}33;
    }
    .ground {
      color: ${({ theme }) => theme.colors.types.ground};
      background-color: ${({ theme }) => theme.colors.types.ground}33;
    }
    .electric {
      color: ${({ theme }) => theme.colors.types.electric};
      background-color: ${({ theme }) => theme.colors.types.electric}33;
    }
    .normal {
      color: ${({ theme }) => theme.colors.types.normal};
      background-color: ${({ theme }) => theme.colors.types.normal}33;
    }
    .grass {
      color: ${({ theme }) => theme.colors.types.grass};
      background-color: ${({ theme }) => theme.colors.types.grass}33;
    }
    .fighting {
      color: ${({ theme }) => theme.colors.types.fighting};
      background-color: ${({ theme }) => theme.colors.types.fighting}33;
    }
    .psychic {
      color: ${({ theme }) => theme.colors.types.psychic};
      background-color: ${({ theme }) => theme.colors.types.psychic}33;
    }
    .bug {
      color: ${({ theme }) => theme.colors.types.bug};
      background-color: ${({ theme }) => theme.colors.types.bug}33;
    }
    .steel {
      color: ${({ theme }) => theme.colors.types.steel};
      background-color: ${({ theme }) => theme.colors.types.steel}33;
    }
    .ghost {
      color: ${({ theme }) => theme.colors.types.ghost};
      background-color: ${({ theme }) => theme.colors.types.ghost}33;
    }
    .rock {
      color: ${({ theme }) => theme.colors.types.rock};
      background-color: ${({ theme }) => theme.colors.types.rock}33;
    }
    .fairy {
      color: ${({ theme }) => theme.colors.types.fairy};
      background-color: ${({ theme }) => theme.colors.types.fairy}33;
    }
    .dragon {
      color: ${({ theme }) => theme.colors.types.dragon};
      background-color: ${({ theme }) => theme.colors.types.dragon}33;
    }
    .flying {
      color: ${({ theme }) => theme.colors.types.flying};
      background-color: ${({ theme }) => theme.colors.types.flying}33;
    }
    .dark {
      color: ${({ theme }) => theme.colors.types.dark};
      background-color: ${({ theme }) => theme.colors.types.dark}33;
    }
  }

  .loading {
    color: ${({ theme }) => theme.colors.blue};
    padding: 15px;
  }
`;
