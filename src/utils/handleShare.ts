export async function handleShare(link: string) {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Check out this link!',
        url: `https://${link}`,
      });
    } catch (error) {
      console.error('Failed to share:', error);
    }
  } else {
    console.error('Web Share API not supported on this platform');
  }
}
