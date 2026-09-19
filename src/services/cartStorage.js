import AsyncStorage from '@react-native-async-storage/async-storage'

export const CART_STORAGE_KEY = 'northstar-shopping-cart'

export async function saveCart(items) {
  // TODO 1:
  // Convert the cart array to JSON text and save it with AsyncStorage.setItem().
  try {
    const json = JSON.stringify(items)
    await AsyncStorage.setItem(CART_STORAGE_KEY, json)
  } catch (error) {
    console.error('saveCart failed:', error)
    throw error
  }
}

export async function loadCart() {
  // TODO 2:
  // Read CART_STORAGE_KEY with AsyncStorage.getItem().
  // If nothing has been saved, return [].
  // If data exists, convert it back to JavaScript with JSON.parse().
  try {
    const json = await AsyncStorage.getItem(CART_STORAGE_KEY)
    if (json === null) {
      return []
    }
    const parsed = JSON.parse(json)
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    console.error('loadCart failed:', error)
    return []
  }
}

export async function clearSavedCart() {
  // TODO 3:
  // Remove only CART_STORAGE_KEY. Do not use AsyncStorage.clear().
  try {
    await AsyncStorage.removeItem(CART_STORAGE_KEY)
  } catch (error) {
    console.error('clearSavedCart failed:', error)
    throw error;
  }
}
