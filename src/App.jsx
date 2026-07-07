import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import ArticleApp from './article';
import ProfileApp from './creator';
import GoalApp from './goal';
import leanConfig from './config/lean';
import strengthConfig from './config/strength';
import longevityConfig from './config/longevity';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/article" element={<ArticleApp />} />
      <Route path="/creator" element={<ProfileApp />} />
      <Route path="/lean" element={<GoalApp config={leanConfig} />} />
      <Route path="/strength" element={<GoalApp config={strengthConfig} />} />
      <Route path="/longevity" element={<GoalApp config={longevityConfig} />} />
    </Routes>
  );
}
