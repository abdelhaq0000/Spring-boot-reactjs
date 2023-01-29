import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import reportWebVitals from './reportWebVitals';
import './backend.js'
import Login from './Login';
import Membres from './Admin/Membres';
import AjouterMbr from './Admin/AjouterMbr';
import Materiels from './Admin/Materiels';
import AjouterMat from './Admin/AjouterMat';
import Profile from './View/Profile';
import AdminHome from './Admin/AdminHome';
import Fournitures from './Admin/Fournitures'
import Statistiques from './Admin/Statistiques';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MaterielsView from './View/MaterielsView';
import AjouterFrn from './Admin/AjouterFrn';
import FournituresView from './View/FournituresView';
import Home from './View/Home';
import DetailsMat from './View/DetailsMat';
import DetailsFrn from './View/DetailsFrn';
import Demandes from './Admin/DemandesMateriel';
import AdminEdit from './Admin/AdminEdit';
import EditMbr from './Admin/EditMbr';
import DemandesMateriel from './Admin/DemandesMateriel';
import EditFrn from './Admin/EditFrn';
import EditMat from './Admin/EditMat';
import DemandesFrn from './Admin/DemandesFrn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path="/Admin/AdminHome" element={<AdminHome />} />
      <Route exact path="/View/Home" element={<Home />} />
      <Route exact path="/Admin/editMbr/:id" element={<EditMbr />} />
      <Route exact path="/Admin/editFrn/:id" element={<EditFrn />} />
      <Route exact path="/Admin/editMat/:id" element={<EditMat />} />
      <Route exact path="/View/Profile" element={<Profile />} />
      <Route exact path="/View/MaterielsView" element={<MaterielsView />} />
      <Route exact path="/View/FournituresView" element={<FournituresView />} />
      <Route exact path="/Admin/AjouterMat" element={<AjouterMat />} />
      <Route exact path="/Admin/Membres" element={<Membres />} />
      <Route exact path="/Admin/Materiels" element={<Materiels />} />
      <Route exact path="/View/DetailsMat/:idM" element={<DetailsMat />} />
      <Route exact path="/View/DetailsFrn/:idF" element={<DetailsFrn />} />
      <Route exact path="/Admin/AjouterMbr" element={<AjouterMbr />} />
      <Route exact path="/Admin/DemandesMateriel" element={<DemandesMateriel />} />
      <Route exact path="/Admin/DemandesFrn" element={<DemandesFrn />} />
      <Route exact path="/Admin/AdminEdit" element={<AdminEdit />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path='/Admin/Fournitures' element={<Fournitures />} />
      <Route exact path='/Admin/AjouterFrn' element={<AjouterFrn />} />
      <Route exact path='/Admin/Statistiques' element={<Statistiques />} />
    </Routes>
  </Router>
);

reportWebVitals();
