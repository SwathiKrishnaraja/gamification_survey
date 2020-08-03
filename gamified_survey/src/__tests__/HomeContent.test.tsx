import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import HomeContent from '../components/HomeContent'

describe('home page', () => {
    test('should render the introduction text', async () => {
        const { findByTestId } = render(<HomeContent />)
        const introContent = await findByTestId('intro-content')
        expect(introContent).not.toBeNull()
    })

    test('should show the data protection modal when user clicks the "data protection" text', async () => {
        const { findByTestId } = render(<HomeContent />)
        const dataProtection = await findByTestId('data-protection-anchor')
        const modal = await findByTestId('modal')

        expect(modal.className).toEqual('modal-close')
        fireEvent.click(dataProtection)
        expect(modal.className).toEqual('modal-open')
    })

    test('should notify the user when user tries to proceed to next page without accepting data protection', async () => {
        const { findByTestId } = render(<HomeContent />)
        const proceedButton = await findByTestId('proceed-button')
        const privacyHeader = await findByTestId('privacy-header')

        expect(privacyHeader).toHaveStyle('color: black')
        fireEvent.click(proceedButton)
        expect(privacyHeader).toHaveStyle('color:red')
    })
})