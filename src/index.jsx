import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/MainView';
//Import components from React Bootstrap
import { Container } from 'react-bootstrap';

// Import statement to indicate the need to bundle `./index.scss`
import './index.scss';

// Main component
const MyFlixApplication = () => {
    //Return the MainView component
    return (
        <Container>
            <MainView />
        </Container>
    );
};

// Find the “root” DOM node
const container = document.querySelector('#root');
const root = createRoot(container);

// Render React component in the root DOM element
root.render(<MyFlixApplication />);
