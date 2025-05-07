export async function fetchEvents() {
    try {
      const res = await fetch('https://santosnr6.github.io/Data/events.json');
      const data = await res.json();
  
      return Array.isArray(data) ? data : Array.isArray(data.events) ? data.events : [];
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  }
  