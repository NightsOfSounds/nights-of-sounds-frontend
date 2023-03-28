import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import SiteTitle from "./SiteTitle"

test("renders Site title", () => {
    render(<SiteTitle>Title</SiteTitle>)
    const title = screen.getByText(/Title/)
    expect(title.nodeName).toBe("H3")
})