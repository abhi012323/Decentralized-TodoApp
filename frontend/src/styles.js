import styled from 'styled-components';

// Color variables for consistent theming
const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#343a40',
  background: '#ffffff',
  shadow: 'rgba(0,0,0,0.1)'
};

export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${colors.background};
  border-radius: 15px;
  box-shadow: 0 8px 30px ${colors.shadow};
  transition: transform 0.2s ease;

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    margin: 0.5rem;
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${colors.dark};
  font-weight: 700;
  letter-spacing: -0.5px;
  background: linear-gradient(to right, ${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  background: ${props => props.variant === 'secondary' ? colors.secondary : colors.primary};
  color: ${colors.light};
  border: none;
  padding: 0.8rem 1.5rem;
  margin: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${colors.shadow};
    background: ${props => props.variant === 'secondary' ? '#5a6268' : '#0069d9'};
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(0,123,255,0.25);
    outline: none;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  appearance: none;
  width: 1.2em;
  height: 1.2em;
  border: 2px solid #dee2e6;
  border-radius: 4px;
  margin-right: 1rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;

  &:checked {
    background-color: ${colors.primary};
    border-color: ${colors.primary};
    
    &::after {
      content: '✓';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 0.9em;
    }
  }

  &:hover {
    border-color: ${colors.primary};
  }
`;

export const AddTaskContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const AddTaskInput = styled(Input)`
  margin: 0;
`;

export const CheckboxContainer = styled.div` // New container for checkbox and label
  display: flex;
  align-items: center;
`;

export const AddTaskButton = styled(Button)`
  padding: 0.8rem 2rem;
`;

export const AnalyticsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  background: ${colors.light};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px ${colors.shadow};
`;

export const AnalyticsTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${colors.dark};
  grid-column: 1 / -1;
`;

export const AnalyticsText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${colors.primary};
  }
`;

export const TaskListContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const TaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background: ${colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px ${colors.shadow};
  transition: all 0.2s ease;
  gap: 1rem;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 8px ${colors.shadow};
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const TaskActions = styled.div`
  margin-left: auto;
  display: flex;
  gap: 0.5rem;

  @media (max-width: 480px) {
    margin-left: 0;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => props.urgent ? '#fff0f0' : '#e9ecef'};
  color: ${props => props.urgent ? '#dc3545' : colors.secondary};
`;