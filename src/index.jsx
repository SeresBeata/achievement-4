import { createRoot } from 'react-dom/client';

// Import statement to indicate the need to bundle `./index.scss`
import './index.scss';

// Main component
const MyFlixApplication = () => {
    return (
        <div className="my-flix">
            <div>Good morning!</div>
        </div>
    );
};

// Find the “root” DOM node
const container = document.querySelector('#root');
const root = createRoot(container);

// Render React component in the root DOM element
root.render(<MyFlixApplication />);
