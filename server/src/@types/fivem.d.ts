declare global {
  interface Deferrals {
    defer(): void;
    update(message: string): void;
    done(reason?: string): void;
  }
}

export {};
