import { describe, expect, it } from 'vitest'
import { nextViewIndex } from './litebeam-media'

describe('official image navigation', () => {
  it('wraps from the last real photograph to the first', () => {
    expect(nextViewIndex(7, 1, 8)).toBe(0)
  })
  it('wraps backwards from the first real photograph', () => {
    expect(nextViewIndex(0, -1, 8)).toBe(7)
  })
})