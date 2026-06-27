/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <h1 className="text-3xl font-serif text-[#2C2A26] mb-4">Checkout</h1>
            <p className="text-sm text-[#5D5A53] mb-12">This is a demo checkout page. Purchases are not processed.</p>
            
            <div className="space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] mb-6">Contact Information</h2>
                <div className="space-y-4">
                   <input type="email" placeholder="Email address" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                   <div className="flex items-center gap-2">
                     <input type="checkbox" id="newsletter" className="accent-[#2C2A26] cursor-not-allowed" disabled />
                     <label htmlFor="newsletter" className="text-sm text-[#5D5A53] cursor-not-allowed">Email me with news, farm offers, and seasonal harvest catalogs</label>
                   </div>
                </div>
              </div>

              {/* Section 2: Shipping */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] mb-6">Shipping Address</h2>
                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="First name" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                      <input type="text" placeholder="Last name" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                   </div>
                   <input type="text" placeholder="Address line" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                   <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="City (e.g., Algiers, Constantine, Bejaia...)" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                      <input type="text" placeholder="Postal code" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed" disabled />
                   </div>
                </div>
              </div>

               {/* Section 3: Payment (Mock) */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] mb-6">Payment Method</h2>
                <div className="p-6 border border-[#D6D1C7] bg-white/50 space-y-4">
                   <p className="text-sm text-[#5D5A53] mb-2">We support bank transfers and cash on delivery for agricultural products.</p>
                   <input type="text" placeholder="Cash on Delivery / CCP Transfer" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors cursor-not-allowed font-medium" value="Cash on Delivery (Paiement à la livraison)" disabled />
                </div>
              </div>

              <div>
                <button 
                    disabled
                    className="w-full py-5 bg-[#A8A29E] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium cursor-not-allowed opacity-80 animate-pulse"
                >
                    Pay On Delivery — {total.toLocaleString()} DA
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-[#D6D1C7]">
            <h2 className="text-xl font-serif text-[#2C2A26] mb-8">Order Summary</h2>
            
            <div className="space-y-6 mb-8">
               {items.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                     <div className="w-16 h-16 bg-[#EBE7DE] relative">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#2C2A26] text-white text-[10px] flex items-center justify-center rounded-full">1</span>
                     </div>
                     <div className="flex-1">
                        <h3 className="font-serif text-[#2C2A26] text-base">{item.name}</h3>
                        <p className="text-xs text-[#A8A29E]">{item.category}</p>
                     </div>
                     <span className="text-sm text-[#5D5A53]">{item.price.toLocaleString()} DA</span>
                  </div>
               ))}
            </div>

            <div className="border-t border-[#D6D1C7] pt-6 space-y-2">
              <div className="flex justify-between text-sm text-[#5D5A53]">
                 <span>Subtotal</span>
                 <span>{subtotal.toLocaleString()} DA</span>
              </div>
              <div className="flex justify-between text-sm text-[#5D5A53]">
                 <span>Shipping</span>
                 <span>Gratuit (Algeria)</span>
              </div>
            </div>
            
            <div className="border-t border-[#D6D1C7] mt-6 pt-6">
               <div className="flex justify-between items-center">
                 <span className="font-serif text-xl text-[#2C2A26]">Total</span>
                 <div className="flex items-end gap-2">
                   <span className="text-xs text-[#A8A29E] mb-1">DZD</span>
                   <span className="font-serif text-2xl text-[#2C2A26]">{total.toLocaleString()} DA</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
