import {Cache} from '../../repositories/cache.repository'

const mockCache = {
    'name': '24i',
    'age': '24'
}

jest.mock('../../repositories/cache.repository', () => {
    return { 
        Cache: jest.fn().mockImplementation(() => {
            return {
                get: jest.fn((key) => mockCache[key]),
                set: jest.fn(),
                purge: jest.fn()
            }   
        })
    }
})

it('returns cached item', () => {
    const cache = new Cache()
    expect(cache.get('name')).toBe('24i')
    expect(cache.get('age')).toBe('24')
})