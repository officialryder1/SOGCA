<script>
    import { pb } from '$lib/pb'; // Adjust the import path as necessary
    let formData = {
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
        is_prayer: false
    };

    let isLoading= false;
    let formSubmitted = false;
    let formError = '';

    async function handleSubmit() {
        try {
            if (isLoading) return;
            // Validate form
            if (!formData.name || !formData.message) {
                formError = 'Please fill in all required fields';
                return;
            }

             // Simulate a successful submission
            isLoading = true;

            formError = '';
            // SUbmit to API endpoint
          
          
             const record = await pb.collection('feedback').create({
                    'name': formData.name,
                    'email': formData.email,
                    'phone': formData.phone,
                    'subject': formData.subject,
                    'is_prayer': formData.is_prayer,
                    'message': formData.message,
                })

                formSubmitted = true;

                // Reset form (except for prayer request flag)
                formData = {
                    name: '',
                    email: '',
                    phone: '',
                    subject: formData.subject,
                    message: '',
                    is_prayer: formData.is_prayer
                };
    
        } catch (error) {
            formError = 'An error occurred. Please try again later.';
            console.error('Submission error:', error);
        } finally {
            isLoading = false;
        }
    }
</script>

<section class="py-12 bg-base-100">
    <div class="container mx-auto px-4 py-10">
        <h1 class="text-4xl font-bold text-center mb-8 text-orange-500/90 text-shadow-white text-shadow-2xs">Contact Our Church</h1>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Church Information -->
            <div>
                <div class="card bg-base-200 shadow-md mb-8">
                    <div class="card-body">
                        <h2 class="card-title text-2xl mb-4 text-orange-400">Our Location</h2>
                        
                        <div class="space-y-4">
                            <div class="flex items-start gap-4">
                                <div class="text-orange-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-orange-300">Address</h3>
                                    <p>Liza Place, Beside First Bank</p>
                                    <p>Kubwa, Abuja</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4">
                                <div class="text-orange-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-orange-300">Phone</h3>
                                    <p>+234 903 314 7769</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4">
                                <div class="text-orange-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-orange-300">Email</h3>
                                    <p>info@ourchurch.org</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4">
                                <div class="text-orange-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-orange-300">Service Times</h3>
                                    <p>Sunday: 8:30 AM - 11:00 AM</p>
                                    <p>Tuesday Communion Service: 7:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Church Images Gallery -->
                <div class="grid grid-cols-3 gap-4 mb-8">
                    <div class="aspect-w-4 aspect-h-3">
                        <img 
                            src="/liza_plaza.jpeg" 
                            alt="Our church building" 
                            class="object-cover rounded-lg shadow-md w-full h-full"
                        />
                    </div>
                    <div class="aspect-w-4 aspect-h-3">
                        <img 
                            src="/member2.jpg" 
                            alt="Church interior" 
                            class="object-cover rounded-lg shadow-md w-full h-full"
                        />
                    </div>
                    <div class="aspect-w-4 aspect-h-3">
                        <img 
                            src="/member1.jpg" 
                            alt="Church community" 
                            class="object-cover rounded-lg shadow-md w-full h-full"
                        />
                    </div>
                </div>
                
                <!-- Social Media Links -->
                <div class="card bg-base-200 shadow-md">
                    <div class="card-body">
                        <h2 class="card-title text-2xl mb-4 text-orange-400">Connect With Us</h2>
                        <div class="flex gap-4 justify-center">
                            <a href="https://facebook.com/ourchurch" class="btn btn-circle btn-primary" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com/ourchurch" class="btn btn-circle btn-primary" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="https://instagram.com/ourchurch" class="btn btn-circle bg-orange-700/90" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="https://youtube.com/ourchurch" class="btn btn-circle bg-orange-700/90" aria-label="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Contact Form -->
            <div>
                <div class="card bg-base-200 shadow-md">
                    <div class="card-body">
                        <h2 class="card-title text-2xl mb-4 text-orange-400">Send Us a Message</h2>
                        
                        {#if formSubmitted}
                            <div class="alert alert-success mb-4">
                                <div class="flex-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <!-- svelte-ignore a11y_label_has_associated_control -->
                                    <label>
                                        {formData.is_prayer 
                                            ? 'Your prayer request has been received. Our prayer team will lift it up.'
                                            : 'Thank you for your message! We will get back to you soon.'}
                                    </label>
                                </div>
                            </div>
                        {:else}
                            <form on:submit|preventDefault={handleSubmit} class="space-y-4">
                                {#if formError}
                                    <div class="alert alert-error mb-4">
                                        <div class="flex-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <label>{formError}</label>
                                        </div>
                                    </div>
                                {/if}
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Name *</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        bind:value={formData.name}
                                        placeholder="John Doe" 
                                        class="input input-bordered" 
                                        required
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email Address</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        bind:value={formData.email}
                                        placeholder="john@example.com" 
                                        class="input input-bordered" 
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Phone Number</span>
                                    </label>
                                    <input 
                                        type="tel" 
                                        bind:value={formData.phone}
                                        placeholder="(123) 456-7890" 
                                        class="input input-bordered" 
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Subject</span>
                                    </label>
                                    <select 
                                        bind:value={formData.subject}
                                        class="select select-bordered w-full"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="visitor">I'm New / Visiting</option>
                                        <option value="ministry">Ministry Information</option>
                                        <option value="giving">Giving/Donations</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text">This is a prayer request</span>
                                        <input 
                                            type="checkbox" 
                                            bind:checked={formData.is_prayer}
                                            class="checkbox checkbox-primary" 
                                        />
                                    </label>
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Message *</span>
                                    </label>
                                    <textarea 
                                        bind:value={formData.message}
                                        class="textarea textarea-bordered h-32" 
                                        placeholder={formData.is_prayer 
                                            ? 'Please share your prayer request...'
                                            : 'How can we help you?'}
                                        required
                                    ></textarea>
                                </div>
                                
                                <div class="form-control pt-4">
                                    <button type="submit" class="btn bg-orange-600">
                                        {#if isLoading}
                                            <span class="loading loading-spinner"></span>
                                        {:else}
                                            {formData.is_prayer ? 'Submit Prayer Request' : 'Send Message'}
                                        {/if}
                                    </button>
                                </div>
                            </form>
                        {/if}
                    </div>
                </div>
                
                <!-- Google Maps Embed -->
                <div class="card bg-base-200 shadow-md mt-8">
                    <div class="card-body p-0">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132828!2d-73.98784368459382!3d40.75798597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI4LjciTiA3M8KwNTknMTAuMiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                            width="100%" 
                            height="300" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy"
                            class="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {#if formError}
        <div class="alert alert-error mb-4">
            <div class="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <label>{formError}</label>
            </div>
        </div>
    {/if}
</section>