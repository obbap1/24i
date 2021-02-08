import Redis from 'ioredis';

export class Cache {
    private client: Redis.Redis
    constructor() {
        this.client = new Redis(Number(process.env.REDIS_PORT), String(process.env.REDIS_HOST))
    }

    set(key: string, value) {
        return this.client.set(key, JSON.stringify(value))
    }

    async get(key: string) {
        const data = await this.client.get(key)
        return JSON.parse(data)
    }

    purge(key: string) {
        return this.client.del(key)
    }

}