import { validateEmail } from '@/lib/utils';

describe('Email Validation', () => {
  // Test valid email addresses
  const validEmails = [
    'user@example.com',
    'john.doe@company.co.uk',
    'first-last@domain.com',
    'user+tag@example.org',
    'email123@subdomain.example.net'
  ];

  // Test invalid email addresses
  const invalidEmails = [
    '',
    'invalid-email',
    '@missing-username.com',
    'user@.com',
    'user@domain',
    'user@domain..com',
    'user name@domain.com',
    '@@@invalid.com',
    // Very long email beyond 320 characters
    'a'.repeat(321) + '@example.com'
  ];

  // Test valid emails
  test.each(validEmails)('should validate valid email: %s', (email) => {
    expect(validateEmail(email)).toBe(true);
  });

  // Test invalid emails
  test.each(invalidEmails)('should invalidate invalid email: %s', (email) => {
    expect(validateEmail(email)).toBe(false);
  });

  // Additional specific test cases
  it('should handle edge cases', () => {
    // Empty string
    expect(validateEmail('')).toBe(false);

    // Max length email
    const maxLengthEmail = 'a'.repeat(64) + '@' + 'b'.repeat(255);
    expect(validateEmail(maxLengthEmail)).toBe(true);

    // Exceeding max length
    const tooLongEmail = 'a'.repeat(321) + '@example.com';
    expect(validateEmail(tooLongEmail)).toBe(false);
  });
});