import * as Redis from 'redis';

const CACHE_DEFAULT_ALIVE = Number(process.env.CACHE_DEFAULT_ALIVE);

export type CacheDataTypes = any;

class RedisInterface {
	private isActive = true;

	public async getSetCache<T extends CacheDataTypes>( key: string, callbackFunc: () => Promise<T> ): Promise<T | null> {
		try {
			const redisClient = Redis.createClient();
			await redisClient.connect();
			const storedData = await redisClient.get(key);
			if (storedData) {
				await redisClient.quit();
				return JSON.parse(storedData) as T;
			}
			const newData = await callbackFunc();
			await redisClient.SETEX(key, CACHE_DEFAULT_ALIVE, JSON.stringify(newData));
			await redisClient.quit();
			return newData;
		} catch (_err) {
			return null;
		}
	}
}

export const redis = new RedisInterface();
