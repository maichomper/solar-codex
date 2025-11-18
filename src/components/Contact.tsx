'use client';

import { Box, Container, Typography, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import Button from './common/Button';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { useState, useRef } from 'react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Focus first error field after state update
      setTimeout(() => {
        if (errors.name && nameInputRef.current) {
          nameInputRef.current.focus();
        } else if (errors.email && emailInputRef.current) {
          emailInputRef.current.focus();
        } else if (errors.message && messageInputRef.current) {
          messageInputRef.current.focus();
        }
      }, 0);
      return;
    }
    
    setIsSubmitting(true);
    // TODO: Implement form submission logic (e.g., serverless function, third-party service)
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: (theme) => theme.custom.section.padding,
        backgroundColor: 'grey.900',
        color: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          sx={{ textAlign: 'center' }}
        >
          <Box component={motion.div} variants={fadeInUp}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontWeight: 800,
                color: 'white',
                fontFamily: (theme) => theme.custom.fonts.handwriting,
              }}
            >
              Let's Build Something Together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 6,
                fontSize: '1.25rem',
                maxWidth: '700px',
                mx: 'auto',
                color: 'grey.300',
              }}
            >
              Ready to turn your vision into reality? Start with a free consultation.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, mt: 4 }}>
            {/* Primary CTA */}
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 24px)' } }}>
              <Box
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  p: 4,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    color: 'white',
                  }}
                >
                  Get Your Free AI Radar Opportunity Map 🎯
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: 'grey.300',
                    textAlign: 'center',
                  }}
                >
                  In 30 minutes, we'll map out where AI can transform your operations.
                  Walk away with a visual roadmap of automation opportunities—no strings attached.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 3,
                    color: 'grey.400',
                    textAlign: 'center',
                  }}
                >
                  <a
                    href="https://www.figma.com/board/wxnvlsnPA4Wif059eyk9q2/Infosel-AI-Opportunity-Radar?node-id=0-1&p=f&t=k2dLkZ5QiQKRHodl-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#FF0000', textDecoration: 'underline' }}
                  >
                    See an example AI Opportunity Radar
                  </a>
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  href="https://calendly.com/micho-draws/30min"
                  sx={{
                    px: 6,
                    py: 2,
                  }}
                >
                  Book Your Free Session 📅
                </Button>
              </Box>
            </Box>

            {/* Contact Form */}
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 24px)' } }}>
              <Box
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  p: 4,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%',
                }}
              >
                {!submitted ? (
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    aria-label="Contact form"
                    noValidate
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        mb: 3,
                        fontWeight: 700,
                        color: 'white',
                        textAlign: 'center',
                      }}
                    >
                      Or Send Us a Message 💬
                    </Typography>

                    <div role="status" aria-live="polite" aria-atomic="true" style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
                      {Object.keys(errors).length > 0 && 'Please fix the errors in the form'}
                    </div>

                    <TextField
                      inputRef={nameInputRef}
                      fullWidth
                      required
                      name="name"
                      label="Name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                      }}
                    />
                    {errors.name && (
                      <Typography
                        id="name-error"
                        role="alert"
                        variant="caption"
                        sx={{ color: 'error.main', mb: 1, display: 'block' }}
                      >
                        {errors.name}
                      </Typography>
                    )}

                    <TextField
                      inputRef={emailInputRef}
                      fullWidth
                      required
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                      }}
                    />
                    {errors.email && (
                      <Typography
                        id="email-error"
                        role="alert"
                        variant="caption"
                        sx={{ color: 'error.main', mb: 1, display: 'block' }}
                      >
                        {errors.email}
                      </Typography>
                    )}

                    <TextField
                      fullWidth
                      name="company"
                      label="Company"
                      variant="outlined"
                      value={formData.company}
                      onChange={handleChange}
                      sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                      }}
                    />

                    <TextField
                      inputRef={messageInputRef}
                      fullWidth
                      required
                      name="message"
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      sx={{
                        mb: 3,
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                      }}
                    />
                    {errors.message && (
                      <Typography
                        id="message-error"
                        role="alert"
                        variant="caption"
                        sx={{ color: 'error.main', mb: 1, display: 'block' }}
                      >
                        {errors.message}
                      </Typography>
                    )}

                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      fullWidth
                      size="large"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message ✉️'}
                    </Button>
                  </Box>
                ) : (
                  <Box
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 400,
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        color: 'white',
                        textAlign: 'center',
                      }}
                    >
                      Thank You! 🎉
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'grey.300',
                        textAlign: 'center',
                      }}
                    >
                      We've received your message and will get back to you within 24 hours.
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          {/* Footer */}
          <Box
            component={motion.footer}
            role="contentinfo"
            variants={fadeInUp}
            sx={{
              mt: 8,
              pt: 4,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography variant="body2" sx={{ color: 'grey.400' }}>
              © {new Date().getFullYear()} SolarCodex. Built with Next.js, MUI, and Framer Motion.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
