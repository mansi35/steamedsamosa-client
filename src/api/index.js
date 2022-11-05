import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:1337' });
API.interceptors.request.use((req) => {
  if (JSON.parse(localStorage.getItem('profile'))?.jwt) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).jwt}`;
  }
  return req;
});

// User Auth API
export const signIn = (profile) => API.post('/auth/local', profile);
export const signUp = (profile) => API.post('/auth/local/register', profile);
export const sendEmailVerification = (emailId) => API.post('/auth/send-email-confirmation', { email: emailId, url: 'https://raahee-server.eastus.cloudapp.azure.com/admin/plugins/users-permissions/auth/send-email-confirmation' });
export const forgotPassword = (email) => API.post('/auth/forgot-password', { email, url: 'https://raahee-server.eastus.cloudapp.azure.com/admin/plugins/users-permissions/auth/reset-password' });
export const resetPassword = (password, confirmPassword, code) => API.post('/auth/reset-password', { password, passwordConfirmation: confirmPassword, code });
export const updateProfile = (data) => API.put('/services/edit-user', data);

// Events API
export const fetchEvents = () => API.get('/events');
export const fetchCaterers = () => API.get('/events?eventType=catering');
export const fetchFlorists = () => API.get('/events?eventType=florist');
export const fetchVenues = () => API.get('/events?eventType=venue');
export const fetchBeauticians = () => API.get('/events?eventType=makeup');
export const fetchAccomodations = () => API.get('/events?eventType=accomodation');
export const fetchPhotographers = () => API.get('/events?eventType=photography');
export const fetchMusic = () => API.get('/events?eventType=music');
export const fetchEventById = (eventId) => API.get(`/events/${eventId}`);
export const fetchEventFeedbackById = (eventId) => API.get(`/customer-reviews?event=${eventId}&_sort=createdAt:DESC`);
export const createEventFeedback = (eventFeedback) => API.post('/customer-reviews', eventFeedback);
export const deleteEventFeedback = (eventFeedbackId) => API.delete(`/customer-reviews/${eventFeedbackId}`);
export const bookEvent = (eventId, updatedEvent) => API.put(`/events/${eventId}`, updatedEvent);

// Package API
export const fetchPackages = () => API.get('/packages');
export const fetchPackageById = (eventId) => API.get(`/packages/${eventId}`);
export const fetchPackageFeedbackById = (eventId) => API.get(`/customer-reviews?package=${eventId}&_sort=createdAt:DESC`);
export const createPackageFeedback = (eventFeedback) => API.post('/customer-reviews', eventFeedback);
export const deletePackageFeedback = (eventFeedbackId) => API.delete(`/customer-reviews/${eventFeedbackId}`);
export const bookPackage = (eventId, updatedEvent) => API.put(`/packages/${eventId}`, updatedEvent);

// Upload File
export const uploadFile = (file) => API.post('/upload', file);

// Email API
export const sendEmail = (email) => API.post('/emails', email);

// Admin API
export const verifyMhp = (mhpId, status) => API.put(`/users/${mhpId}`, { verificationStage: status });
