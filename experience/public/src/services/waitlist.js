import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config.js';

// Organization-aware waitlist collection.
// Structure: waitlist/{docId} with organization field.
// All ZenOS platform data is organization-namespaced.

export async function submitWaitlist(formData) {
  const entry = {
    organization: 'albanyzeno',
    name: formData.name,
    email: formData.email,
    businessType: formData.businessType,
    stage: formData.stage,
    needs: formData.needs || [],
    vision: formData.vision || '',
    source: 'albanyzeno.com',
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, 'waitlist'), entry);
  return docRef.id;
}
