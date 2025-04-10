import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';

export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row relative h-screen">
            <LeftColumn />
            <RightColumn />
        </div>
    );
}
