import { doc, getDoc } from 'firebase/firestore';
import { db } from './config.js';

// Albany's UID — Phase 1 hardcoded, abstracted in Phase 3
const OWNER_UID = 'PpDDXq7gtQhTmTm3KGjWFY0OICN2';

export async function getPublicProfile() {
  try {
    const profileDoc = await getDoc(doc(db, 'profiles', OWNER_UID));
    if (profileDoc.exists()) return profileDoc.data();
    return null;
  } catch (err) {
    console.error('[ZenOS] Failed to load profile:', err);
    return null;
  }
}
