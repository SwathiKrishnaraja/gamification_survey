import React from 'react'
import { render } from '@testing-library/react'
import CustomProgressBar from '../components/CustomProgressBar'

describe('custom progress bar', () => {
    test('should render the progress bar', async () => {
        const props = {
            progress: 40
        }
        const { findByTestId } = render(<CustomProgressBar {...props} />)
        const progressBar = await findByTestId('progress-bar')
        expect(progressBar).toHaveStyle('width: 40')
    })
})