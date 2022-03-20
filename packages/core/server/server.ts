import {Testing} from "./testing/manager";
import {Config, ESX, OnNet, Payload, Source} from "./index";
import {DEFAULT_CONFIG} from "./skeleton/constants";
import {Logger} from "./classes/logger";
import {Class, Inject, Singleton} from "./decorators/singleton.decorator";
import {EventContext} from "./decorators/event.decorator";
import "reflect-metadata"

Testing.stub()
Testing.defStub("GetNumPlayerIdentifiers", () => 0)
let config: Partial<Config> = {};
export const INTERNAL_LOGGER = new Logger("ESX::CORE", getConfigField("minLogLevel"))



export function setConfig(cf: Partial<Config>) {
    config = cf
}



export function getConfigField<T extends keyof Config>(key: T): Config[T] {
    // @ts-ignore
    return config[key] || DEFAULT_CONFIG[key]
}