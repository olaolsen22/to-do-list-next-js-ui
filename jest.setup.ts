import '@testing-library/jest-dom';

afterEach(() => {
  jest.clearAllMocks();
});

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/test',
  useSearchParams: () => new URLSearchParams(),
}));

if (typeof HTMLDialogElement !== 'undefined') {
  if (!HTMLDialogElement.prototype.showModal) {
    HTMLDialogElement.prototype.showModal = function () {};
  }
  if (!HTMLDialogElement.prototype.close) {
    HTMLDialogElement.prototype.close = function () {};
  }
}

jest.mock('@/actions', () => ({
  __esModule: true, // helpful if the real module is ESM
  createToDoItemAction: jest.fn(async () => ({ ok: true })),
  updateToDoItemDoneStatusAction: jest.fn(async () => ({ ok: true })),
}));
