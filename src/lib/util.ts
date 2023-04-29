// for our purposes, this is all we're going to check
export const isInstagramHandle = (socialLink: string) =>
  socialLink.startsWith("@");

export const generateInstagramLink = (instagramHandle: string) =>
  // assuming it starts with @
  `https://www.instagram.com/${instagramHandle.slice(1)}`;
