
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0cHJ0aGVtcm56amlhd2p2ZnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5ODUyMTAsImV4cCI6MjA2NTU2MTIxMH0.AcZuZzeRXvk7SvJehRps2nhF67WjxwVt4Y22kGQQSp8'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0cHJ0aGVtcm56amlhd2p2ZnNpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTk4NTIxMCwiZXhwIjoyMDY1NTYxMjEwfQ.JRdarnLTv4BuAtJxn2VT9Z_0kusWWy8Vt1wHbjzcMl0'
const supabase = createClient(supabaseUrl, supabaseKey)

document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...

    // Contact form submit handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            const { error } = await supabase.from('contacts').insert([data]);
            if (error) {
                alert('Gagal mengirim pesan!');
            } else {
                alert('Pesan berhasil dikirim!');
                contactForm.reset();
            }
        });
    }



document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('a[href="#contact"]');
    const contactSection = document.getElementById('contact');

    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default tautan

        // Menampilkan bagian Kontak
        contactSection.style.display = 'block';

        // Menggulir ke bagian Kontak
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
    function hideContactSection() {
     alert("Project 2 masih dalam tahap pengembangan. Silakan kembali lagi nanti.");
    }});   
});
