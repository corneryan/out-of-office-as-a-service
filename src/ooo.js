export const oooMessages = {
  corporate: [
    {
      value: "I’m currently out of the office and will respond when I return.",
      weight: 4,
    },
    {
      value: "I’m away from email and will follow up upon my return.",
      weight: 3,
    },
    {
      value: "I’m out of the office today and will reply when I’m back.",
      weight: 3,
    },
    {
      value: "I’m unavailable at the moment and will respond when I return.",
      weight: 3,
    },
    { value: "I’m out of the office with limited access to email.", weight: 2 },
    {
      value: "I’ll review this message once I’m back in the office.",
      weight: 2,
    },
    {
      value: "Thank you for your message. I’ll respond when I return.",
      weight: 2,
    },
    {
      value: "I’m away and will get back to you as soon as I’m able.",
      weight: 1,
    },
    { value: "I’m currently unavailable and will reply later.", weight: 1 },
  ],

  human: [
    { value: "I’m offline for a bit and will reply when I’m back.", weight: 4 },
    { value: "I’m out today and catching up when I return.", weight: 3 },
    { value: "I’m taking some time away from email.", weight: 3 },
    { value: "I’m away from my inbox and will respond later.", weight: 3 },
    {
      value: "I’m not around right now, but I’ll reply when I’m back.",
      weight: 2,
    },
    { value: "I’m stepping away and will follow up soon.", weight: 2 },
    { value: "I’m out for a bit — talk soon.", weight: 2 },
    { value: "I’m offline today and will respond later.", weight: 1 },
    { value: "Away from email for a little while.", weight: 1 },
  ],

  boundary: [
    { value: "I’m out of the office and not checking messages.", weight: 3 },
    { value: "I’ll respond after I’m back online.", weight: 3 },
    { value: "This message won’t reach me until I return.", weight: 3 },
    { value: "I’m unavailable and will reply later.", weight: 2 },
    { value: "I’m away and will respond when I’m back.", weight: 2 },
    { value: "I’m offline and will follow up after I return.", weight: 2 },
    { value: "I won’t see this message until I’m back.", weight: 1 },
    { value: "I’m not monitoring email right now.", weight: 1 },
  ],

  feral: [
    { value: "I’m offline. The inbox will survive.", weight: 1 },
    { value: "Out of office. Back later.", weight: 1 },
    { value: "I’m away and doing nothing urgent.", weight: 1 },
    { value: "Not around. Will reply when I’m back.", weight: 1 },
    { value: "I’m offline and not in a hurry.", weight: 1 },
    { value: "Out of office. Be kind to yourself.", weight: 1 },
  ],
};

export const honestyWeights = {
  low: { corporate: 5, human: 3, boundary: 1, feral: 0 },
  medium: { corporate: 3, human: 4, boundary: 2, feral: 0 },
  high: { corporate: 1, human: 3, boundary: 4, feral: 1 },
  feral: { corporate: 0, human: 2, boundary: 3, feral: 4 },
};
export const reasonBias = {
  rest: { human: 3, boundary: 2, corporate: 1 },
  focus: { boundary: 3, human: 2, corporate: 1 },
  travel: { corporate: 3, human: 2, boundary: 1 },
  unspecified: { corporate: 2, human: 2, boundary: 1 },
};
