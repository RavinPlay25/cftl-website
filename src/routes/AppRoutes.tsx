import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { AboutPage } from '../pages/AboutPage';
import { AdmissionsPage } from '../pages/AdmissionsPage';
import { BranchDetailPage } from '../pages/BranchDetail';
import { BranchesPage } from '../pages/BranchesPage';
import { ContactPage } from '../pages/ContactPage';
import { FacilitiesPage } from '../pages/FacilitiesPage';
import { GalleryAlbumPage } from '../pages/GalleryAlbum';
import { GalleryPage } from '../pages/GalleryPage';
import { HomePage } from '../pages/HomePage';
import { ProgramsPage } from '../pages/ProgramsPage';
import { ResultsPage } from '../pages/ResultsPage';
import { TestimonialsPage } from '../pages/TestimonialsPage';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="programs" element={<ProgramsPage />} />
      <Route path="facilities" element={<FacilitiesPage />} />
      <Route path="results" element={<ResultsPage />} />
      <Route path="branches" element={<BranchesPage />} />
      <Route path="branches/:slug" element={<BranchDetailPage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="gallery/:albumSlug" element={<GalleryAlbumPage />} />
      <Route path="testimonials" element={<TestimonialsPage />} />
      <Route path="admissions" element={<AdmissionsPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);
