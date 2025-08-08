export const createClient = jest.fn(() => ({
  from: jest.fn(() => ({
    select: jest.fn(() => ({
      order: jest.fn(() => ({ data: [], error: null })),
    })),
    update: jest.fn(() => ({
      eq: jest.fn(() => ({ error: null })),
    })),
  })),
  rpc: jest.fn(() => ({
    returns: jest.fn(() => ({ data: [], error: null })),
  })),
}));

export const createClientComponentClient = jest.fn(() => ({}));
