
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Specialist
 * 
 */
export type Specialist = $Result.DefaultSelection<Prisma.$SpecialistPayload>
/**
 * Model TimeSlots
 * 
 */
export type TimeSlots = $Result.DefaultSelection<Prisma.$TimeSlotsPayload>
/**
 * Model Appointments
 * 
 */
export type Appointments = $Result.DefaultSelection<Prisma.$AppointmentsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.specialist`: Exposes CRUD operations for the **Specialist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialists
    * const specialists = await prisma.specialist.findMany()
    * ```
    */
  get specialist(): Prisma.SpecialistDelegate<ExtArgs>;

  /**
   * `prisma.timeSlots`: Exposes CRUD operations for the **TimeSlots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeSlots
    * const timeSlots = await prisma.timeSlots.findMany()
    * ```
    */
  get timeSlots(): Prisma.TimeSlotsDelegate<ExtArgs>;

  /**
   * `prisma.appointments`: Exposes CRUD operations for the **Appointments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointments.findMany()
    * ```
    */
  get appointments(): Prisma.AppointmentsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Specialist: 'Specialist',
    TimeSlots: 'TimeSlots',
    Appointments: 'Appointments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "specialist" | "timeSlots" | "appointments"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Specialist: {
        payload: Prisma.$SpecialistPayload<ExtArgs>
        fields: Prisma.SpecialistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>
          }
          findFirst: {
            args: Prisma.SpecialistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>
          }
          findMany: {
            args: Prisma.SpecialistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>[]
          }
          create: {
            args: Prisma.SpecialistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>
          }
          createMany: {
            args: Prisma.SpecialistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>[]
          }
          delete: {
            args: Prisma.SpecialistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>
          }
          update: {
            args: Prisma.SpecialistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>
          }
          deleteMany: {
            args: Prisma.SpecialistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpecialistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>
          }
          aggregate: {
            args: Prisma.SpecialistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialist>
          }
          groupBy: {
            args: Prisma.SpecialistGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialistGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialistCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialistCountAggregateOutputType> | number
          }
        }
      }
      TimeSlots: {
        payload: Prisma.$TimeSlotsPayload<ExtArgs>
        fields: Prisma.TimeSlotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeSlotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeSlotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>
          }
          findFirst: {
            args: Prisma.TimeSlotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeSlotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>
          }
          findMany: {
            args: Prisma.TimeSlotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>[]
          }
          create: {
            args: Prisma.TimeSlotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>
          }
          createMany: {
            args: Prisma.TimeSlotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeSlotsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>[]
          }
          delete: {
            args: Prisma.TimeSlotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>
          }
          update: {
            args: Prisma.TimeSlotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>
          }
          deleteMany: {
            args: Prisma.TimeSlotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeSlotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimeSlotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>
          }
          aggregate: {
            args: Prisma.TimeSlotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeSlots>
          }
          groupBy: {
            args: Prisma.TimeSlotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeSlotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeSlotsCountArgs<ExtArgs>
            result: $Utils.Optional<TimeSlotsCountAggregateOutputType> | number
          }
        }
      }
      Appointments: {
        payload: Prisma.$AppointmentsPayload<ExtArgs>
        fields: Prisma.AppointmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          findFirst: {
            args: Prisma.AppointmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          findMany: {
            args: Prisma.AppointmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          create: {
            args: Prisma.AppointmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          createMany: {
            args: Prisma.AppointmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          delete: {
            args: Prisma.AppointmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          update: {
            args: Prisma.AppointmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          aggregate: {
            args: Prisma.AppointmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointments>
          }
          groupBy: {
            args: Prisma.AppointmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SpecialistCountOutputType
   */

  export type SpecialistCountOutputType = {
    timeSlots: number
    appointments: number
  }

  export type SpecialistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeSlots?: boolean | SpecialistCountOutputTypeCountTimeSlotsArgs
    appointments?: boolean | SpecialistCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * SpecialistCountOutputType without action
   */
  export type SpecialistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistCountOutputType
     */
    select?: SpecialistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialistCountOutputType without action
   */
  export type SpecialistCountOutputTypeCountTimeSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeSlotsWhereInput
  }

  /**
   * SpecialistCountOutputType without action
   */
  export type SpecialistCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    telegramId: string | null
    firstName: string | null
    lastName: string | null
    chatId: string | null
    username: string | null
    isMaster: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    telegramId: string | null
    firstName: string | null
    lastName: string | null
    chatId: string | null
    username: string | null
    isMaster: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    telegramId: number
    firstName: number
    lastName: number
    chatId: number
    username: number
    isMaster: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    telegramId?: true
    firstName?: true
    lastName?: true
    chatId?: true
    username?: true
    isMaster?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    telegramId?: true
    firstName?: true
    lastName?: true
    chatId?: true
    username?: true
    isMaster?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    telegramId?: true
    firstName?: true
    lastName?: true
    chatId?: true
    username?: true
    isMaster?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    telegramId: string
    firstName: string | null
    lastName: string | null
    chatId: string | null
    username: string | null
    isMaster: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    firstName?: boolean
    lastName?: boolean
    chatId?: boolean
    username?: boolean
    isMaster?: boolean
    createdAt?: boolean
    specialist?: boolean | User$specialistArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    firstName?: boolean
    lastName?: boolean
    chatId?: boolean
    username?: boolean
    isMaster?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    telegramId?: boolean
    firstName?: boolean
    lastName?: boolean
    chatId?: boolean
    username?: boolean
    isMaster?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialist?: boolean | User$specialistArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      specialist: Prisma.$SpecialistPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      telegramId: string
      firstName: string | null
      lastName: string | null
      chatId: string | null
      username: string | null
      isMaster: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialist<T extends User$specialistArgs<ExtArgs> = {}>(args?: Subset<T, User$specialistArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly telegramId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly chatId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly isMaster: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.specialist
   */
  export type User$specialistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    where?: SpecialistWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Specialist
   */

  export type AggregateSpecialist = {
    _count: SpecialistCountAggregateOutputType | null
    _avg: SpecialistAvgAggregateOutputType | null
    _sum: SpecialistSumAggregateOutputType | null
    _min: SpecialistMinAggregateOutputType | null
    _max: SpecialistMaxAggregateOutputType | null
  }

  export type SpecialistAvgAggregateOutputType = {
    id: number | null
  }

  export type SpecialistSumAggregateOutputType = {
    id: number | null
  }

  export type SpecialistMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    chatId: string | null
    userId: string | null
    username: string | null
    image: string | null
    price: string | null
    phone: string | null
    category: string | null
    description: string | null
    status: string | null
    address: string | null
    isMaster: boolean | null
    createdAt: Date | null
  }

  export type SpecialistMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    chatId: string | null
    userId: string | null
    username: string | null
    image: string | null
    price: string | null
    phone: string | null
    category: string | null
    description: string | null
    status: string | null
    address: string | null
    isMaster: boolean | null
    createdAt: Date | null
  }

  export type SpecialistCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    chatId: number
    userId: number
    username: number
    image: number
    price: number
    phone: number
    category: number
    description: number
    status: number
    address: number
    isMaster: number
    createdAt: number
    _all: number
  }


  export type SpecialistAvgAggregateInputType = {
    id?: true
  }

  export type SpecialistSumAggregateInputType = {
    id?: true
  }

  export type SpecialistMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    chatId?: true
    userId?: true
    username?: true
    image?: true
    price?: true
    phone?: true
    category?: true
    description?: true
    status?: true
    address?: true
    isMaster?: true
    createdAt?: true
  }

  export type SpecialistMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    chatId?: true
    userId?: true
    username?: true
    image?: true
    price?: true
    phone?: true
    category?: true
    description?: true
    status?: true
    address?: true
    isMaster?: true
    createdAt?: true
  }

  export type SpecialistCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    chatId?: true
    userId?: true
    username?: true
    image?: true
    price?: true
    phone?: true
    category?: true
    description?: true
    status?: true
    address?: true
    isMaster?: true
    createdAt?: true
    _all?: true
  }

  export type SpecialistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialist to aggregate.
     */
    where?: SpecialistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialists to fetch.
     */
    orderBy?: SpecialistOrderByWithRelationInput | SpecialistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialists
    **/
    _count?: true | SpecialistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialistMaxAggregateInputType
  }

  export type GetSpecialistAggregateType<T extends SpecialistAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialist[P]>
      : GetScalarType<T[P], AggregateSpecialist[P]>
  }




  export type SpecialistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialistWhereInput
    orderBy?: SpecialistOrderByWithAggregationInput | SpecialistOrderByWithAggregationInput[]
    by: SpecialistScalarFieldEnum[] | SpecialistScalarFieldEnum
    having?: SpecialistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialistCountAggregateInputType | true
    _avg?: SpecialistAvgAggregateInputType
    _sum?: SpecialistSumAggregateInputType
    _min?: SpecialistMinAggregateInputType
    _max?: SpecialistMaxAggregateInputType
  }

  export type SpecialistGroupByOutputType = {
    id: number
    firstName: string | null
    lastName: string | null
    chatId: string | null
    userId: string
    username: string | null
    image: string | null
    price: string | null
    phone: string | null
    category: string | null
    description: string | null
    status: string | null
    address: string | null
    isMaster: boolean
    createdAt: Date
    _count: SpecialistCountAggregateOutputType | null
    _avg: SpecialistAvgAggregateOutputType | null
    _sum: SpecialistSumAggregateOutputType | null
    _min: SpecialistMinAggregateOutputType | null
    _max: SpecialistMaxAggregateOutputType | null
  }

  type GetSpecialistGroupByPayload<T extends SpecialistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialistGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialistGroupByOutputType[P]>
        }
      >
    >


  export type SpecialistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    chatId?: boolean
    userId?: boolean
    username?: boolean
    image?: boolean
    price?: boolean
    phone?: boolean
    category?: boolean
    description?: boolean
    status?: boolean
    address?: boolean
    isMaster?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    timeSlots?: boolean | Specialist$timeSlotsArgs<ExtArgs>
    appointments?: boolean | Specialist$appointmentsArgs<ExtArgs>
    _count?: boolean | SpecialistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialist"]>

  export type SpecialistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    chatId?: boolean
    userId?: boolean
    username?: boolean
    image?: boolean
    price?: boolean
    phone?: boolean
    category?: boolean
    description?: boolean
    status?: boolean
    address?: boolean
    isMaster?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialist"]>

  export type SpecialistSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    chatId?: boolean
    userId?: boolean
    username?: boolean
    image?: boolean
    price?: boolean
    phone?: boolean
    category?: boolean
    description?: boolean
    status?: boolean
    address?: boolean
    isMaster?: boolean
    createdAt?: boolean
  }

  export type SpecialistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    timeSlots?: boolean | Specialist$timeSlotsArgs<ExtArgs>
    appointments?: boolean | Specialist$appointmentsArgs<ExtArgs>
    _count?: boolean | SpecialistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SpecialistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      timeSlots: Prisma.$TimeSlotsPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string | null
      lastName: string | null
      chatId: string | null
      userId: string
      username: string | null
      image: string | null
      price: string | null
      phone: string | null
      category: string | null
      description: string | null
      status: string | null
      address: string | null
      isMaster: boolean
      createdAt: Date
    }, ExtArgs["result"]["specialist"]>
    composites: {}
  }

  type SpecialistGetPayload<S extends boolean | null | undefined | SpecialistDefaultArgs> = $Result.GetResult<Prisma.$SpecialistPayload, S>

  type SpecialistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpecialistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpecialistCountAggregateInputType | true
    }

  export interface SpecialistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialist'], meta: { name: 'Specialist' } }
    /**
     * Find zero or one Specialist that matches the filter.
     * @param {SpecialistFindUniqueArgs} args - Arguments to find a Specialist
     * @example
     * // Get one Specialist
     * const specialist = await prisma.specialist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialistFindUniqueArgs>(args: SelectSubset<T, SpecialistFindUniqueArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Specialist that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpecialistFindUniqueOrThrowArgs} args - Arguments to find a Specialist
     * @example
     * // Get one Specialist
     * const specialist = await prisma.specialist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialistFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Specialist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistFindFirstArgs} args - Arguments to find a Specialist
     * @example
     * // Get one Specialist
     * const specialist = await prisma.specialist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialistFindFirstArgs>(args?: SelectSubset<T, SpecialistFindFirstArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Specialist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistFindFirstOrThrowArgs} args - Arguments to find a Specialist
     * @example
     * // Get one Specialist
     * const specialist = await prisma.specialist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialistFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialistFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Specialists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialists
     * const specialists = await prisma.specialist.findMany()
     * 
     * // Get first 10 Specialists
     * const specialists = await prisma.specialist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialistWithIdOnly = await prisma.specialist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialistFindManyArgs>(args?: SelectSubset<T, SpecialistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Specialist.
     * @param {SpecialistCreateArgs} args - Arguments to create a Specialist.
     * @example
     * // Create one Specialist
     * const Specialist = await prisma.specialist.create({
     *   data: {
     *     // ... data to create a Specialist
     *   }
     * })
     * 
     */
    create<T extends SpecialistCreateArgs>(args: SelectSubset<T, SpecialistCreateArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Specialists.
     * @param {SpecialistCreateManyArgs} args - Arguments to create many Specialists.
     * @example
     * // Create many Specialists
     * const specialist = await prisma.specialist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialistCreateManyArgs>(args?: SelectSubset<T, SpecialistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialists and returns the data saved in the database.
     * @param {SpecialistCreateManyAndReturnArgs} args - Arguments to create many Specialists.
     * @example
     * // Create many Specialists
     * const specialist = await prisma.specialist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialists and only return the `id`
     * const specialistWithIdOnly = await prisma.specialist.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialistCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Specialist.
     * @param {SpecialistDeleteArgs} args - Arguments to delete one Specialist.
     * @example
     * // Delete one Specialist
     * const Specialist = await prisma.specialist.delete({
     *   where: {
     *     // ... filter to delete one Specialist
     *   }
     * })
     * 
     */
    delete<T extends SpecialistDeleteArgs>(args: SelectSubset<T, SpecialistDeleteArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Specialist.
     * @param {SpecialistUpdateArgs} args - Arguments to update one Specialist.
     * @example
     * // Update one Specialist
     * const specialist = await prisma.specialist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialistUpdateArgs>(args: SelectSubset<T, SpecialistUpdateArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Specialists.
     * @param {SpecialistDeleteManyArgs} args - Arguments to filter Specialists to delete.
     * @example
     * // Delete a few Specialists
     * const { count } = await prisma.specialist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialistDeleteManyArgs>(args?: SelectSubset<T, SpecialistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialists
     * const specialist = await prisma.specialist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialistUpdateManyArgs>(args: SelectSubset<T, SpecialistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Specialist.
     * @param {SpecialistUpsertArgs} args - Arguments to update or create a Specialist.
     * @example
     * // Update or create a Specialist
     * const specialist = await prisma.specialist.upsert({
     *   create: {
     *     // ... data to create a Specialist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialist we want to update
     *   }
     * })
     */
    upsert<T extends SpecialistUpsertArgs>(args: SelectSubset<T, SpecialistUpsertArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Specialists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistCountArgs} args - Arguments to filter Specialists to count.
     * @example
     * // Count the number of Specialists
     * const count = await prisma.specialist.count({
     *   where: {
     *     // ... the filter for the Specialists we want to count
     *   }
     * })
    **/
    count<T extends SpecialistCountArgs>(
      args?: Subset<T, SpecialistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialistAggregateArgs>(args: Subset<T, SpecialistAggregateArgs>): Prisma.PrismaPromise<GetSpecialistAggregateType<T>>

    /**
     * Group by Specialist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialistGroupByArgs['orderBy'] }
        : { orderBy?: SpecialistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialist model
   */
  readonly fields: SpecialistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    timeSlots<T extends Specialist$timeSlotsArgs<ExtArgs> = {}>(args?: Subset<T, Specialist$timeSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findMany"> | Null>
    appointments<T extends Specialist$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Specialist$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Specialist model
   */ 
  interface SpecialistFieldRefs {
    readonly id: FieldRef<"Specialist", 'Int'>
    readonly firstName: FieldRef<"Specialist", 'String'>
    readonly lastName: FieldRef<"Specialist", 'String'>
    readonly chatId: FieldRef<"Specialist", 'String'>
    readonly userId: FieldRef<"Specialist", 'String'>
    readonly username: FieldRef<"Specialist", 'String'>
    readonly image: FieldRef<"Specialist", 'String'>
    readonly price: FieldRef<"Specialist", 'String'>
    readonly phone: FieldRef<"Specialist", 'String'>
    readonly category: FieldRef<"Specialist", 'String'>
    readonly description: FieldRef<"Specialist", 'String'>
    readonly status: FieldRef<"Specialist", 'String'>
    readonly address: FieldRef<"Specialist", 'String'>
    readonly isMaster: FieldRef<"Specialist", 'Boolean'>
    readonly createdAt: FieldRef<"Specialist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Specialist findUnique
   */
  export type SpecialistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * Filter, which Specialist to fetch.
     */
    where: SpecialistWhereUniqueInput
  }

  /**
   * Specialist findUniqueOrThrow
   */
  export type SpecialistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * Filter, which Specialist to fetch.
     */
    where: SpecialistWhereUniqueInput
  }

  /**
   * Specialist findFirst
   */
  export type SpecialistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * Filter, which Specialist to fetch.
     */
    where?: SpecialistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialists to fetch.
     */
    orderBy?: SpecialistOrderByWithRelationInput | SpecialistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialists.
     */
    cursor?: SpecialistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialists.
     */
    distinct?: SpecialistScalarFieldEnum | SpecialistScalarFieldEnum[]
  }

  /**
   * Specialist findFirstOrThrow
   */
  export type SpecialistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * Filter, which Specialist to fetch.
     */
    where?: SpecialistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialists to fetch.
     */
    orderBy?: SpecialistOrderByWithRelationInput | SpecialistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialists.
     */
    cursor?: SpecialistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialists.
     */
    distinct?: SpecialistScalarFieldEnum | SpecialistScalarFieldEnum[]
  }

  /**
   * Specialist findMany
   */
  export type SpecialistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * Filter, which Specialists to fetch.
     */
    where?: SpecialistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialists to fetch.
     */
    orderBy?: SpecialistOrderByWithRelationInput | SpecialistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialists.
     */
    cursor?: SpecialistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialists.
     */
    skip?: number
    distinct?: SpecialistScalarFieldEnum | SpecialistScalarFieldEnum[]
  }

  /**
   * Specialist create
   */
  export type SpecialistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * The data needed to create a Specialist.
     */
    data: XOR<SpecialistCreateInput, SpecialistUncheckedCreateInput>
  }

  /**
   * Specialist createMany
   */
  export type SpecialistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialists.
     */
    data: SpecialistCreateManyInput | SpecialistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialist createManyAndReturn
   */
  export type SpecialistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Specialists.
     */
    data: SpecialistCreateManyInput | SpecialistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Specialist update
   */
  export type SpecialistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * The data needed to update a Specialist.
     */
    data: XOR<SpecialistUpdateInput, SpecialistUncheckedUpdateInput>
    /**
     * Choose, which Specialist to update.
     */
    where: SpecialistWhereUniqueInput
  }

  /**
   * Specialist updateMany
   */
  export type SpecialistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialists.
     */
    data: XOR<SpecialistUpdateManyMutationInput, SpecialistUncheckedUpdateManyInput>
    /**
     * Filter which Specialists to update
     */
    where?: SpecialistWhereInput
  }

  /**
   * Specialist upsert
   */
  export type SpecialistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * The filter to search for the Specialist to update in case it exists.
     */
    where: SpecialistWhereUniqueInput
    /**
     * In case the Specialist found by the `where` argument doesn't exist, create a new Specialist with this data.
     */
    create: XOR<SpecialistCreateInput, SpecialistUncheckedCreateInput>
    /**
     * In case the Specialist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialistUpdateInput, SpecialistUncheckedUpdateInput>
  }

  /**
   * Specialist delete
   */
  export type SpecialistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * Filter which Specialist to delete.
     */
    where: SpecialistWhereUniqueInput
  }

  /**
   * Specialist deleteMany
   */
  export type SpecialistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialists to delete
     */
    where?: SpecialistWhereInput
  }

  /**
   * Specialist.timeSlots
   */
  export type Specialist$timeSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    where?: TimeSlotsWhereInput
    orderBy?: TimeSlotsOrderByWithRelationInput | TimeSlotsOrderByWithRelationInput[]
    cursor?: TimeSlotsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeSlotsScalarFieldEnum | TimeSlotsScalarFieldEnum[]
  }

  /**
   * Specialist.appointments
   */
  export type Specialist$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    cursor?: AppointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Specialist without action
   */
  export type SpecialistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
  }


  /**
   * Model TimeSlots
   */

  export type AggregateTimeSlots = {
    _count: TimeSlotsCountAggregateOutputType | null
    _avg: TimeSlotsAvgAggregateOutputType | null
    _sum: TimeSlotsSumAggregateOutputType | null
    _min: TimeSlotsMinAggregateOutputType | null
    _max: TimeSlotsMaxAggregateOutputType | null
  }

  export type TimeSlotsAvgAggregateOutputType = {
    id: number | null
    dayOfWeek: number | null
    interval: number | null
  }

  export type TimeSlotsSumAggregateOutputType = {
    id: number | null
    dayOfWeek: number | null
    interval: number | null
  }

  export type TimeSlotsMinAggregateOutputType = {
    id: number | null
    specialistId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    interval: number | null
    grafikName: string | null
  }

  export type TimeSlotsMaxAggregateOutputType = {
    id: number | null
    specialistId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    interval: number | null
    grafikName: string | null
  }

  export type TimeSlotsCountAggregateOutputType = {
    id: number
    specialistId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    interval: number
    time: number
    grafikName: number
    _all: number
  }


  export type TimeSlotsAvgAggregateInputType = {
    id?: true
    dayOfWeek?: true
    interval?: true
  }

  export type TimeSlotsSumAggregateInputType = {
    id?: true
    dayOfWeek?: true
    interval?: true
  }

  export type TimeSlotsMinAggregateInputType = {
    id?: true
    specialistId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    interval?: true
    grafikName?: true
  }

  export type TimeSlotsMaxAggregateInputType = {
    id?: true
    specialistId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    interval?: true
    grafikName?: true
  }

  export type TimeSlotsCountAggregateInputType = {
    id?: true
    specialistId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    interval?: true
    time?: true
    grafikName?: true
    _all?: true
  }

  export type TimeSlotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeSlots to aggregate.
     */
    where?: TimeSlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotsOrderByWithRelationInput | TimeSlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeSlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeSlots
    **/
    _count?: true | TimeSlotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeSlotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeSlotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeSlotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeSlotsMaxAggregateInputType
  }

  export type GetTimeSlotsAggregateType<T extends TimeSlotsAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeSlots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeSlots[P]>
      : GetScalarType<T[P], AggregateTimeSlots[P]>
  }




  export type TimeSlotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeSlotsWhereInput
    orderBy?: TimeSlotsOrderByWithAggregationInput | TimeSlotsOrderByWithAggregationInput[]
    by: TimeSlotsScalarFieldEnum[] | TimeSlotsScalarFieldEnum
    having?: TimeSlotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeSlotsCountAggregateInputType | true
    _avg?: TimeSlotsAvgAggregateInputType
    _sum?: TimeSlotsSumAggregateInputType
    _min?: TimeSlotsMinAggregateInputType
    _max?: TimeSlotsMaxAggregateInputType
  }

  export type TimeSlotsGroupByOutputType = {
    id: number
    specialistId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    interval: number
    time: string[]
    grafikName: string
    _count: TimeSlotsCountAggregateOutputType | null
    _avg: TimeSlotsAvgAggregateOutputType | null
    _sum: TimeSlotsSumAggregateOutputType | null
    _min: TimeSlotsMinAggregateOutputType | null
    _max: TimeSlotsMaxAggregateOutputType | null
  }

  type GetTimeSlotsGroupByPayload<T extends TimeSlotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeSlotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeSlotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeSlotsGroupByOutputType[P]>
            : GetScalarType<T[P], TimeSlotsGroupByOutputType[P]>
        }
      >
    >


  export type TimeSlotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specialistId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    interval?: boolean
    time?: boolean
    grafikName?: boolean
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeSlots"]>

  export type TimeSlotsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specialistId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    interval?: boolean
    time?: boolean
    grafikName?: boolean
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeSlots"]>

  export type TimeSlotsSelectScalar = {
    id?: boolean
    specialistId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    interval?: boolean
    time?: boolean
    grafikName?: boolean
  }

  export type TimeSlotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
  }
  export type TimeSlotsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
  }

  export type $TimeSlotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeSlots"
    objects: {
      specialist: Prisma.$SpecialistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      specialistId: string
      dayOfWeek: number
      startTime: string
      endTime: string
      interval: number
      time: string[]
      grafikName: string
    }, ExtArgs["result"]["timeSlots"]>
    composites: {}
  }

  type TimeSlotsGetPayload<S extends boolean | null | undefined | TimeSlotsDefaultArgs> = $Result.GetResult<Prisma.$TimeSlotsPayload, S>

  type TimeSlotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimeSlotsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimeSlotsCountAggregateInputType | true
    }

  export interface TimeSlotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeSlots'], meta: { name: 'TimeSlots' } }
    /**
     * Find zero or one TimeSlots that matches the filter.
     * @param {TimeSlotsFindUniqueArgs} args - Arguments to find a TimeSlots
     * @example
     * // Get one TimeSlots
     * const timeSlots = await prisma.timeSlots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeSlotsFindUniqueArgs>(args: SelectSubset<T, TimeSlotsFindUniqueArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TimeSlots that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimeSlotsFindUniqueOrThrowArgs} args - Arguments to find a TimeSlots
     * @example
     * // Get one TimeSlots
     * const timeSlots = await prisma.timeSlots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeSlotsFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeSlotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsFindFirstArgs} args - Arguments to find a TimeSlots
     * @example
     * // Get one TimeSlots
     * const timeSlots = await prisma.timeSlots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeSlotsFindFirstArgs>(args?: SelectSubset<T, TimeSlotsFindFirstArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TimeSlots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsFindFirstOrThrowArgs} args - Arguments to find a TimeSlots
     * @example
     * // Get one TimeSlots
     * const timeSlots = await prisma.timeSlots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeSlotsFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeSlotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeSlots
     * const timeSlots = await prisma.timeSlots.findMany()
     * 
     * // Get first 10 TimeSlots
     * const timeSlots = await prisma.timeSlots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeSlotsWithIdOnly = await prisma.timeSlots.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeSlotsFindManyArgs>(args?: SelectSubset<T, TimeSlotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TimeSlots.
     * @param {TimeSlotsCreateArgs} args - Arguments to create a TimeSlots.
     * @example
     * // Create one TimeSlots
     * const TimeSlots = await prisma.timeSlots.create({
     *   data: {
     *     // ... data to create a TimeSlots
     *   }
     * })
     * 
     */
    create<T extends TimeSlotsCreateArgs>(args: SelectSubset<T, TimeSlotsCreateArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TimeSlots.
     * @param {TimeSlotsCreateManyArgs} args - Arguments to create many TimeSlots.
     * @example
     * // Create many TimeSlots
     * const timeSlots = await prisma.timeSlots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeSlotsCreateManyArgs>(args?: SelectSubset<T, TimeSlotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeSlots and returns the data saved in the database.
     * @param {TimeSlotsCreateManyAndReturnArgs} args - Arguments to create many TimeSlots.
     * @example
     * // Create many TimeSlots
     * const timeSlots = await prisma.timeSlots.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeSlots and only return the `id`
     * const timeSlotsWithIdOnly = await prisma.timeSlots.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeSlotsCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeSlotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TimeSlots.
     * @param {TimeSlotsDeleteArgs} args - Arguments to delete one TimeSlots.
     * @example
     * // Delete one TimeSlots
     * const TimeSlots = await prisma.timeSlots.delete({
     *   where: {
     *     // ... filter to delete one TimeSlots
     *   }
     * })
     * 
     */
    delete<T extends TimeSlotsDeleteArgs>(args: SelectSubset<T, TimeSlotsDeleteArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TimeSlots.
     * @param {TimeSlotsUpdateArgs} args - Arguments to update one TimeSlots.
     * @example
     * // Update one TimeSlots
     * const timeSlots = await prisma.timeSlots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeSlotsUpdateArgs>(args: SelectSubset<T, TimeSlotsUpdateArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TimeSlots.
     * @param {TimeSlotsDeleteManyArgs} args - Arguments to filter TimeSlots to delete.
     * @example
     * // Delete a few TimeSlots
     * const { count } = await prisma.timeSlots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeSlotsDeleteManyArgs>(args?: SelectSubset<T, TimeSlotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeSlots
     * const timeSlots = await prisma.timeSlots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeSlotsUpdateManyArgs>(args: SelectSubset<T, TimeSlotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimeSlots.
     * @param {TimeSlotsUpsertArgs} args - Arguments to update or create a TimeSlots.
     * @example
     * // Update or create a TimeSlots
     * const timeSlots = await prisma.timeSlots.upsert({
     *   create: {
     *     // ... data to create a TimeSlots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeSlots we want to update
     *   }
     * })
     */
    upsert<T extends TimeSlotsUpsertArgs>(args: SelectSubset<T, TimeSlotsUpsertArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsCountArgs} args - Arguments to filter TimeSlots to count.
     * @example
     * // Count the number of TimeSlots
     * const count = await prisma.timeSlots.count({
     *   where: {
     *     // ... the filter for the TimeSlots we want to count
     *   }
     * })
    **/
    count<T extends TimeSlotsCountArgs>(
      args?: Subset<T, TimeSlotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeSlotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeSlotsAggregateArgs>(args: Subset<T, TimeSlotsAggregateArgs>): Prisma.PrismaPromise<GetTimeSlotsAggregateType<T>>

    /**
     * Group by TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeSlotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeSlotsGroupByArgs['orderBy'] }
        : { orderBy?: TimeSlotsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeSlotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeSlotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeSlots model
   */
  readonly fields: TimeSlotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeSlots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeSlotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialist<T extends SpecialistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialistDefaultArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeSlots model
   */ 
  interface TimeSlotsFieldRefs {
    readonly id: FieldRef<"TimeSlots", 'Int'>
    readonly specialistId: FieldRef<"TimeSlots", 'String'>
    readonly dayOfWeek: FieldRef<"TimeSlots", 'Int'>
    readonly startTime: FieldRef<"TimeSlots", 'String'>
    readonly endTime: FieldRef<"TimeSlots", 'String'>
    readonly interval: FieldRef<"TimeSlots", 'Int'>
    readonly time: FieldRef<"TimeSlots", 'String[]'>
    readonly grafikName: FieldRef<"TimeSlots", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TimeSlots findUnique
   */
  export type TimeSlotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where: TimeSlotsWhereUniqueInput
  }

  /**
   * TimeSlots findUniqueOrThrow
   */
  export type TimeSlotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where: TimeSlotsWhereUniqueInput
  }

  /**
   * TimeSlots findFirst
   */
  export type TimeSlotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where?: TimeSlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotsOrderByWithRelationInput | TimeSlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: TimeSlotsScalarFieldEnum | TimeSlotsScalarFieldEnum[]
  }

  /**
   * TimeSlots findFirstOrThrow
   */
  export type TimeSlotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where?: TimeSlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotsOrderByWithRelationInput | TimeSlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: TimeSlotsScalarFieldEnum | TimeSlotsScalarFieldEnum[]
  }

  /**
   * TimeSlots findMany
   */
  export type TimeSlotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where?: TimeSlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotsOrderByWithRelationInput | TimeSlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeSlots.
     */
    cursor?: TimeSlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    distinct?: TimeSlotsScalarFieldEnum | TimeSlotsScalarFieldEnum[]
  }

  /**
   * TimeSlots create
   */
  export type TimeSlotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeSlots.
     */
    data: XOR<TimeSlotsCreateInput, TimeSlotsUncheckedCreateInput>
  }

  /**
   * TimeSlots createMany
   */
  export type TimeSlotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeSlots.
     */
    data: TimeSlotsCreateManyInput | TimeSlotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeSlots createManyAndReturn
   */
  export type TimeSlotsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TimeSlots.
     */
    data: TimeSlotsCreateManyInput | TimeSlotsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeSlots update
   */
  export type TimeSlotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeSlots.
     */
    data: XOR<TimeSlotsUpdateInput, TimeSlotsUncheckedUpdateInput>
    /**
     * Choose, which TimeSlots to update.
     */
    where: TimeSlotsWhereUniqueInput
  }

  /**
   * TimeSlots updateMany
   */
  export type TimeSlotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeSlots.
     */
    data: XOR<TimeSlotsUpdateManyMutationInput, TimeSlotsUncheckedUpdateManyInput>
    /**
     * Filter which TimeSlots to update
     */
    where?: TimeSlotsWhereInput
  }

  /**
   * TimeSlots upsert
   */
  export type TimeSlotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeSlots to update in case it exists.
     */
    where: TimeSlotsWhereUniqueInput
    /**
     * In case the TimeSlots found by the `where` argument doesn't exist, create a new TimeSlots with this data.
     */
    create: XOR<TimeSlotsCreateInput, TimeSlotsUncheckedCreateInput>
    /**
     * In case the TimeSlots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeSlotsUpdateInput, TimeSlotsUncheckedUpdateInput>
  }

  /**
   * TimeSlots delete
   */
  export type TimeSlotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * Filter which TimeSlots to delete.
     */
    where: TimeSlotsWhereUniqueInput
  }

  /**
   * TimeSlots deleteMany
   */
  export type TimeSlotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeSlots to delete
     */
    where?: TimeSlotsWhereInput
  }

  /**
   * TimeSlots without action
   */
  export type TimeSlotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
  }


  /**
   * Model Appointments
   */

  export type AggregateAppointments = {
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  export type AppointmentsAvgAggregateOutputType = {
    id: number | null
  }

  export type AppointmentsSumAggregateOutputType = {
    id: number | null
  }

  export type AppointmentsMinAggregateOutputType = {
    id: number | null
    clientId: string | null
    firstName: string | null
    lastName: string | null
    specialistId: string | null
    date: string | null
    time: string | null
    phone: string | null
    specialistName: string | null
    specialistLastName: string | null
    specialistAddress: string | null
    specialistPrice: string | null
    specialistPhone: string | null
    specialistCategory: string | null
  }

  export type AppointmentsMaxAggregateOutputType = {
    id: number | null
    clientId: string | null
    firstName: string | null
    lastName: string | null
    specialistId: string | null
    date: string | null
    time: string | null
    phone: string | null
    specialistName: string | null
    specialistLastName: string | null
    specialistAddress: string | null
    specialistPrice: string | null
    specialistPhone: string | null
    specialistCategory: string | null
  }

  export type AppointmentsCountAggregateOutputType = {
    id: number
    clientId: number
    firstName: number
    lastName: number
    specialistId: number
    date: number
    time: number
    phone: number
    specialistName: number
    specialistLastName: number
    specialistAddress: number
    specialistPrice: number
    specialistPhone: number
    specialistCategory: number
    _all: number
  }


  export type AppointmentsAvgAggregateInputType = {
    id?: true
  }

  export type AppointmentsSumAggregateInputType = {
    id?: true
  }

  export type AppointmentsMinAggregateInputType = {
    id?: true
    clientId?: true
    firstName?: true
    lastName?: true
    specialistId?: true
    date?: true
    time?: true
    phone?: true
    specialistName?: true
    specialistLastName?: true
    specialistAddress?: true
    specialistPrice?: true
    specialistPhone?: true
    specialistCategory?: true
  }

  export type AppointmentsMaxAggregateInputType = {
    id?: true
    clientId?: true
    firstName?: true
    lastName?: true
    specialistId?: true
    date?: true
    time?: true
    phone?: true
    specialistName?: true
    specialistLastName?: true
    specialistAddress?: true
    specialistPrice?: true
    specialistPhone?: true
    specialistCategory?: true
  }

  export type AppointmentsCountAggregateInputType = {
    id?: true
    clientId?: true
    firstName?: true
    lastName?: true
    specialistId?: true
    date?: true
    time?: true
    phone?: true
    specialistName?: true
    specialistLastName?: true
    specialistAddress?: true
    specialistPrice?: true
    specialistPhone?: true
    specialistCategory?: true
    _all?: true
  }

  export type AppointmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to aggregate.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentsMaxAggregateInputType
  }

  export type GetAppointmentsAggregateType<T extends AppointmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointments[P]>
      : GetScalarType<T[P], AggregateAppointments[P]>
  }




  export type AppointmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithAggregationInput | AppointmentsOrderByWithAggregationInput[]
    by: AppointmentsScalarFieldEnum[] | AppointmentsScalarFieldEnum
    having?: AppointmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentsCountAggregateInputType | true
    _avg?: AppointmentsAvgAggregateInputType
    _sum?: AppointmentsSumAggregateInputType
    _min?: AppointmentsMinAggregateInputType
    _max?: AppointmentsMaxAggregateInputType
  }

  export type AppointmentsGroupByOutputType = {
    id: number
    clientId: string
    firstName: string
    lastName: string
    specialistId: string
    date: string
    time: string
    phone: string
    specialistName: string | null
    specialistLastName: string | null
    specialistAddress: string | null
    specialistPrice: string | null
    specialistPhone: string | null
    specialistCategory: string | null
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  type GetAppointmentsGroupByPayload<T extends AppointmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    firstName?: boolean
    lastName?: boolean
    specialistId?: boolean
    date?: boolean
    time?: boolean
    phone?: boolean
    specialistName?: boolean
    specialistLastName?: boolean
    specialistAddress?: boolean
    specialistPrice?: boolean
    specialistPhone?: boolean
    specialistCategory?: boolean
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type AppointmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    firstName?: boolean
    lastName?: boolean
    specialistId?: boolean
    date?: boolean
    time?: boolean
    phone?: boolean
    specialistName?: boolean
    specialistLastName?: boolean
    specialistAddress?: boolean
    specialistPrice?: boolean
    specialistPhone?: boolean
    specialistCategory?: boolean
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type AppointmentsSelectScalar = {
    id?: boolean
    clientId?: boolean
    firstName?: boolean
    lastName?: boolean
    specialistId?: boolean
    date?: boolean
    time?: boolean
    phone?: boolean
    specialistName?: boolean
    specialistLastName?: boolean
    specialistAddress?: boolean
    specialistPrice?: boolean
    specialistPhone?: boolean
    specialistCategory?: boolean
  }

  export type AppointmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
  }
  export type AppointmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
  }

  export type $AppointmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointments"
    objects: {
      specialist: Prisma.$SpecialistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: string
      firstName: string
      lastName: string
      specialistId: string
      date: string
      time: string
      phone: string
      specialistName: string | null
      specialistLastName: string | null
      specialistAddress: string | null
      specialistPrice: string | null
      specialistPhone: string | null
      specialistCategory: string | null
    }, ExtArgs["result"]["appointments"]>
    composites: {}
  }

  type AppointmentsGetPayload<S extends boolean | null | undefined | AppointmentsDefaultArgs> = $Result.GetResult<Prisma.$AppointmentsPayload, S>

  type AppointmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppointmentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppointmentsCountAggregateInputType | true
    }

  export interface AppointmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointments'], meta: { name: 'Appointments' } }
    /**
     * Find zero or one Appointments that matches the filter.
     * @param {AppointmentsFindUniqueArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentsFindUniqueArgs>(args: SelectSubset<T, AppointmentsFindUniqueArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Appointments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppointmentsFindUniqueOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindFirstArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentsFindFirstArgs>(args?: SelectSubset<T, AppointmentsFindFirstArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Appointments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindFirstOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointments.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentsWithIdOnly = await prisma.appointments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentsFindManyArgs>(args?: SelectSubset<T, AppointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Appointments.
     * @param {AppointmentsCreateArgs} args - Arguments to create a Appointments.
     * @example
     * // Create one Appointments
     * const Appointments = await prisma.appointments.create({
     *   data: {
     *     // ... data to create a Appointments
     *   }
     * })
     * 
     */
    create<T extends AppointmentsCreateArgs>(args: SelectSubset<T, AppointmentsCreateArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Appointments.
     * @param {AppointmentsCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentsCreateManyArgs>(args?: SelectSubset<T, AppointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentsCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentsWithIdOnly = await prisma.appointments.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Appointments.
     * @param {AppointmentsDeleteArgs} args - Arguments to delete one Appointments.
     * @example
     * // Delete one Appointments
     * const Appointments = await prisma.appointments.delete({
     *   where: {
     *     // ... filter to delete one Appointments
     *   }
     * })
     * 
     */
    delete<T extends AppointmentsDeleteArgs>(args: SelectSubset<T, AppointmentsDeleteArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Appointments.
     * @param {AppointmentsUpdateArgs} args - Arguments to update one Appointments.
     * @example
     * // Update one Appointments
     * const appointments = await prisma.appointments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentsUpdateArgs>(args: SelectSubset<T, AppointmentsUpdateArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentsDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentsDeleteManyArgs>(args?: SelectSubset<T, AppointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentsUpdateManyArgs>(args: SelectSubset<T, AppointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointments.
     * @param {AppointmentsUpsertArgs} args - Arguments to update or create a Appointments.
     * @example
     * // Update or create a Appointments
     * const appointments = await prisma.appointments.upsert({
     *   create: {
     *     // ... data to create a Appointments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointments we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentsUpsertArgs>(args: SelectSubset<T, AppointmentsUpsertArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointments.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentsCountArgs>(
      args?: Subset<T, AppointmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentsAggregateArgs>(args: Subset<T, AppointmentsAggregateArgs>): Prisma.PrismaPromise<GetAppointmentsAggregateType<T>>

    /**
     * Group by Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentsGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointments model
   */
  readonly fields: AppointmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialist<T extends SpecialistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialistDefaultArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointments model
   */ 
  interface AppointmentsFieldRefs {
    readonly id: FieldRef<"Appointments", 'Int'>
    readonly clientId: FieldRef<"Appointments", 'String'>
    readonly firstName: FieldRef<"Appointments", 'String'>
    readonly lastName: FieldRef<"Appointments", 'String'>
    readonly specialistId: FieldRef<"Appointments", 'String'>
    readonly date: FieldRef<"Appointments", 'String'>
    readonly time: FieldRef<"Appointments", 'String'>
    readonly phone: FieldRef<"Appointments", 'String'>
    readonly specialistName: FieldRef<"Appointments", 'String'>
    readonly specialistLastName: FieldRef<"Appointments", 'String'>
    readonly specialistAddress: FieldRef<"Appointments", 'String'>
    readonly specialistPrice: FieldRef<"Appointments", 'String'>
    readonly specialistPhone: FieldRef<"Appointments", 'String'>
    readonly specialistCategory: FieldRef<"Appointments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Appointments findUnique
   */
  export type AppointmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments findUniqueOrThrow
   */
  export type AppointmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments findFirst
   */
  export type AppointmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments findFirstOrThrow
   */
  export type AppointmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments findMany
   */
  export type AppointmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments create
   */
  export type AppointmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointments.
     */
    data: XOR<AppointmentsCreateInput, AppointmentsUncheckedCreateInput>
  }

  /**
   * Appointments createMany
   */
  export type AppointmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentsCreateManyInput | AppointmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointments createManyAndReturn
   */
  export type AppointmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentsCreateManyInput | AppointmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointments update
   */
  export type AppointmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointments.
     */
    data: XOR<AppointmentsUpdateInput, AppointmentsUncheckedUpdateInput>
    /**
     * Choose, which Appointments to update.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments updateMany
   */
  export type AppointmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentsWhereInput
  }

  /**
   * Appointments upsert
   */
  export type AppointmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointments to update in case it exists.
     */
    where: AppointmentsWhereUniqueInput
    /**
     * In case the Appointments found by the `where` argument doesn't exist, create a new Appointments with this data.
     */
    create: XOR<AppointmentsCreateInput, AppointmentsUncheckedCreateInput>
    /**
     * In case the Appointments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentsUpdateInput, AppointmentsUncheckedUpdateInput>
  }

  /**
   * Appointments delete
   */
  export type AppointmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter which Appointments to delete.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments deleteMany
   */
  export type AppointmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentsWhereInput
  }

  /**
   * Appointments without action
   */
  export type AppointmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    telegramId: 'telegramId',
    firstName: 'firstName',
    lastName: 'lastName',
    chatId: 'chatId',
    username: 'username',
    isMaster: 'isMaster',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SpecialistScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    chatId: 'chatId',
    userId: 'userId',
    username: 'username',
    image: 'image',
    price: 'price',
    phone: 'phone',
    category: 'category',
    description: 'description',
    status: 'status',
    address: 'address',
    isMaster: 'isMaster',
    createdAt: 'createdAt'
  };

  export type SpecialistScalarFieldEnum = (typeof SpecialistScalarFieldEnum)[keyof typeof SpecialistScalarFieldEnum]


  export const TimeSlotsScalarFieldEnum: {
    id: 'id',
    specialistId: 'specialistId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    interval: 'interval',
    time: 'time',
    grafikName: 'grafikName'
  };

  export type TimeSlotsScalarFieldEnum = (typeof TimeSlotsScalarFieldEnum)[keyof typeof TimeSlotsScalarFieldEnum]


  export const AppointmentsScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    firstName: 'firstName',
    lastName: 'lastName',
    specialistId: 'specialistId',
    date: 'date',
    time: 'time',
    phone: 'phone',
    specialistName: 'specialistName',
    specialistLastName: 'specialistLastName',
    specialistAddress: 'specialistAddress',
    specialistPrice: 'specialistPrice',
    specialistPhone: 'specialistPhone',
    specialistCategory: 'specialistCategory'
  };

  export type AppointmentsScalarFieldEnum = (typeof AppointmentsScalarFieldEnum)[keyof typeof AppointmentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    telegramId?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    chatId?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    isMaster?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    specialist?: XOR<SpecialistNullableRelationFilter, SpecialistWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    chatId?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
    specialist?: SpecialistOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    telegramId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    chatId?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    isMaster?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    specialist?: XOR<SpecialistNullableRelationFilter, SpecialistWhereInput> | null
  }, "id" | "telegramId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    chatId?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    telegramId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    chatId?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    isMaster?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SpecialistWhereInput = {
    AND?: SpecialistWhereInput | SpecialistWhereInput[]
    OR?: SpecialistWhereInput[]
    NOT?: SpecialistWhereInput | SpecialistWhereInput[]
    id?: IntFilter<"Specialist"> | number
    firstName?: StringNullableFilter<"Specialist"> | string | null
    lastName?: StringNullableFilter<"Specialist"> | string | null
    chatId?: StringNullableFilter<"Specialist"> | string | null
    userId?: StringFilter<"Specialist"> | string
    username?: StringNullableFilter<"Specialist"> | string | null
    image?: StringNullableFilter<"Specialist"> | string | null
    price?: StringNullableFilter<"Specialist"> | string | null
    phone?: StringNullableFilter<"Specialist"> | string | null
    category?: StringNullableFilter<"Specialist"> | string | null
    description?: StringNullableFilter<"Specialist"> | string | null
    status?: StringNullableFilter<"Specialist"> | string | null
    address?: StringNullableFilter<"Specialist"> | string | null
    isMaster?: BoolFilter<"Specialist"> | boolean
    createdAt?: DateTimeFilter<"Specialist"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    timeSlots?: TimeSlotsListRelationFilter
    appointments?: AppointmentsListRelationFilter
  }

  export type SpecialistOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    chatId?: SortOrderInput | SortOrder
    userId?: SortOrder
    username?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    timeSlots?: TimeSlotsOrderByRelationAggregateInput
    appointments?: AppointmentsOrderByRelationAggregateInput
  }

  export type SpecialistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: SpecialistWhereInput | SpecialistWhereInput[]
    OR?: SpecialistWhereInput[]
    NOT?: SpecialistWhereInput | SpecialistWhereInput[]
    firstName?: StringNullableFilter<"Specialist"> | string | null
    lastName?: StringNullableFilter<"Specialist"> | string | null
    chatId?: StringNullableFilter<"Specialist"> | string | null
    username?: StringNullableFilter<"Specialist"> | string | null
    image?: StringNullableFilter<"Specialist"> | string | null
    price?: StringNullableFilter<"Specialist"> | string | null
    phone?: StringNullableFilter<"Specialist"> | string | null
    category?: StringNullableFilter<"Specialist"> | string | null
    description?: StringNullableFilter<"Specialist"> | string | null
    status?: StringNullableFilter<"Specialist"> | string | null
    address?: StringNullableFilter<"Specialist"> | string | null
    isMaster?: BoolFilter<"Specialist"> | boolean
    createdAt?: DateTimeFilter<"Specialist"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    timeSlots?: TimeSlotsListRelationFilter
    appointments?: AppointmentsListRelationFilter
  }, "id" | "userId">

  export type SpecialistOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    chatId?: SortOrderInput | SortOrder
    userId?: SortOrder
    username?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
    _count?: SpecialistCountOrderByAggregateInput
    _avg?: SpecialistAvgOrderByAggregateInput
    _max?: SpecialistMaxOrderByAggregateInput
    _min?: SpecialistMinOrderByAggregateInput
    _sum?: SpecialistSumOrderByAggregateInput
  }

  export type SpecialistScalarWhereWithAggregatesInput = {
    AND?: SpecialistScalarWhereWithAggregatesInput | SpecialistScalarWhereWithAggregatesInput[]
    OR?: SpecialistScalarWhereWithAggregatesInput[]
    NOT?: SpecialistScalarWhereWithAggregatesInput | SpecialistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Specialist"> | number
    firstName?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    chatId?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    userId?: StringWithAggregatesFilter<"Specialist"> | string
    username?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    image?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    price?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    category?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    description?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    status?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    address?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    isMaster?: BoolWithAggregatesFilter<"Specialist"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Specialist"> | Date | string
  }

  export type TimeSlotsWhereInput = {
    AND?: TimeSlotsWhereInput | TimeSlotsWhereInput[]
    OR?: TimeSlotsWhereInput[]
    NOT?: TimeSlotsWhereInput | TimeSlotsWhereInput[]
    id?: IntFilter<"TimeSlots"> | number
    specialistId?: StringFilter<"TimeSlots"> | string
    dayOfWeek?: IntFilter<"TimeSlots"> | number
    startTime?: StringFilter<"TimeSlots"> | string
    endTime?: StringFilter<"TimeSlots"> | string
    interval?: IntFilter<"TimeSlots"> | number
    time?: StringNullableListFilter<"TimeSlots">
    grafikName?: StringFilter<"TimeSlots"> | string
    specialist?: XOR<SpecialistRelationFilter, SpecialistWhereInput>
  }

  export type TimeSlotsOrderByWithRelationInput = {
    id?: SortOrder
    specialistId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    interval?: SortOrder
    time?: SortOrder
    grafikName?: SortOrder
    specialist?: SpecialistOrderByWithRelationInput
  }

  export type TimeSlotsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TimeSlotsWhereInput | TimeSlotsWhereInput[]
    OR?: TimeSlotsWhereInput[]
    NOT?: TimeSlotsWhereInput | TimeSlotsWhereInput[]
    specialistId?: StringFilter<"TimeSlots"> | string
    dayOfWeek?: IntFilter<"TimeSlots"> | number
    startTime?: StringFilter<"TimeSlots"> | string
    endTime?: StringFilter<"TimeSlots"> | string
    interval?: IntFilter<"TimeSlots"> | number
    time?: StringNullableListFilter<"TimeSlots">
    grafikName?: StringFilter<"TimeSlots"> | string
    specialist?: XOR<SpecialistRelationFilter, SpecialistWhereInput>
  }, "id">

  export type TimeSlotsOrderByWithAggregationInput = {
    id?: SortOrder
    specialistId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    interval?: SortOrder
    time?: SortOrder
    grafikName?: SortOrder
    _count?: TimeSlotsCountOrderByAggregateInput
    _avg?: TimeSlotsAvgOrderByAggregateInput
    _max?: TimeSlotsMaxOrderByAggregateInput
    _min?: TimeSlotsMinOrderByAggregateInput
    _sum?: TimeSlotsSumOrderByAggregateInput
  }

  export type TimeSlotsScalarWhereWithAggregatesInput = {
    AND?: TimeSlotsScalarWhereWithAggregatesInput | TimeSlotsScalarWhereWithAggregatesInput[]
    OR?: TimeSlotsScalarWhereWithAggregatesInput[]
    NOT?: TimeSlotsScalarWhereWithAggregatesInput | TimeSlotsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TimeSlots"> | number
    specialistId?: StringWithAggregatesFilter<"TimeSlots"> | string
    dayOfWeek?: IntWithAggregatesFilter<"TimeSlots"> | number
    startTime?: StringWithAggregatesFilter<"TimeSlots"> | string
    endTime?: StringWithAggregatesFilter<"TimeSlots"> | string
    interval?: IntWithAggregatesFilter<"TimeSlots"> | number
    time?: StringNullableListFilter<"TimeSlots">
    grafikName?: StringWithAggregatesFilter<"TimeSlots"> | string
  }

  export type AppointmentsWhereInput = {
    AND?: AppointmentsWhereInput | AppointmentsWhereInput[]
    OR?: AppointmentsWhereInput[]
    NOT?: AppointmentsWhereInput | AppointmentsWhereInput[]
    id?: IntFilter<"Appointments"> | number
    clientId?: StringFilter<"Appointments"> | string
    firstName?: StringFilter<"Appointments"> | string
    lastName?: StringFilter<"Appointments"> | string
    specialistId?: StringFilter<"Appointments"> | string
    date?: StringFilter<"Appointments"> | string
    time?: StringFilter<"Appointments"> | string
    phone?: StringFilter<"Appointments"> | string
    specialistName?: StringNullableFilter<"Appointments"> | string | null
    specialistLastName?: StringNullableFilter<"Appointments"> | string | null
    specialistAddress?: StringNullableFilter<"Appointments"> | string | null
    specialistPrice?: StringNullableFilter<"Appointments"> | string | null
    specialistPhone?: StringNullableFilter<"Appointments"> | string | null
    specialistCategory?: StringNullableFilter<"Appointments"> | string | null
    specialist?: XOR<SpecialistRelationFilter, SpecialistWhereInput>
  }

  export type AppointmentsOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    specialistId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    phone?: SortOrder
    specialistName?: SortOrderInput | SortOrder
    specialistLastName?: SortOrderInput | SortOrder
    specialistAddress?: SortOrderInput | SortOrder
    specialistPrice?: SortOrderInput | SortOrder
    specialistPhone?: SortOrderInput | SortOrder
    specialistCategory?: SortOrderInput | SortOrder
    specialist?: SpecialistOrderByWithRelationInput
  }

  export type AppointmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentsWhereInput | AppointmentsWhereInput[]
    OR?: AppointmentsWhereInput[]
    NOT?: AppointmentsWhereInput | AppointmentsWhereInput[]
    clientId?: StringFilter<"Appointments"> | string
    firstName?: StringFilter<"Appointments"> | string
    lastName?: StringFilter<"Appointments"> | string
    specialistId?: StringFilter<"Appointments"> | string
    date?: StringFilter<"Appointments"> | string
    time?: StringFilter<"Appointments"> | string
    phone?: StringFilter<"Appointments"> | string
    specialistName?: StringNullableFilter<"Appointments"> | string | null
    specialistLastName?: StringNullableFilter<"Appointments"> | string | null
    specialistAddress?: StringNullableFilter<"Appointments"> | string | null
    specialistPrice?: StringNullableFilter<"Appointments"> | string | null
    specialistPhone?: StringNullableFilter<"Appointments"> | string | null
    specialistCategory?: StringNullableFilter<"Appointments"> | string | null
    specialist?: XOR<SpecialistRelationFilter, SpecialistWhereInput>
  }, "id">

  export type AppointmentsOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    specialistId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    phone?: SortOrder
    specialistName?: SortOrderInput | SortOrder
    specialistLastName?: SortOrderInput | SortOrder
    specialistAddress?: SortOrderInput | SortOrder
    specialistPrice?: SortOrderInput | SortOrder
    specialistPhone?: SortOrderInput | SortOrder
    specialistCategory?: SortOrderInput | SortOrder
    _count?: AppointmentsCountOrderByAggregateInput
    _avg?: AppointmentsAvgOrderByAggregateInput
    _max?: AppointmentsMaxOrderByAggregateInput
    _min?: AppointmentsMinOrderByAggregateInput
    _sum?: AppointmentsSumOrderByAggregateInput
  }

  export type AppointmentsScalarWhereWithAggregatesInput = {
    AND?: AppointmentsScalarWhereWithAggregatesInput | AppointmentsScalarWhereWithAggregatesInput[]
    OR?: AppointmentsScalarWhereWithAggregatesInput[]
    NOT?: AppointmentsScalarWhereWithAggregatesInput | AppointmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointments"> | number
    clientId?: StringWithAggregatesFilter<"Appointments"> | string
    firstName?: StringWithAggregatesFilter<"Appointments"> | string
    lastName?: StringWithAggregatesFilter<"Appointments"> | string
    specialistId?: StringWithAggregatesFilter<"Appointments"> | string
    date?: StringWithAggregatesFilter<"Appointments"> | string
    time?: StringWithAggregatesFilter<"Appointments"> | string
    phone?: StringWithAggregatesFilter<"Appointments"> | string
    specialistName?: StringNullableWithAggregatesFilter<"Appointments"> | string | null
    specialistLastName?: StringNullableWithAggregatesFilter<"Appointments"> | string | null
    specialistAddress?: StringNullableWithAggregatesFilter<"Appointments"> | string | null
    specialistPrice?: StringNullableWithAggregatesFilter<"Appointments"> | string | null
    specialistPhone?: StringNullableWithAggregatesFilter<"Appointments"> | string | null
    specialistCategory?: StringNullableWithAggregatesFilter<"Appointments"> | string | null
  }

  export type UserCreateInput = {
    telegramId: string
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    username?: string | null
    isMaster?: boolean
    createdAt?: Date | string
    specialist?: SpecialistCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    telegramId: string
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    username?: string | null
    isMaster?: boolean
    createdAt?: Date | string
    specialist?: SpecialistUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    telegramId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialist?: SpecialistUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialist?: SpecialistUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    telegramId: string
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    username?: string | null
    isMaster?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    telegramId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistCreateInput = {
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    username?: string | null
    image?: string | null
    price?: string | null
    phone?: string | null
    category?: string | null
    description?: string | null
    status?: string | null
    address?: string | null
    isMaster?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSpecialistInput
    timeSlots?: TimeSlotsCreateNestedManyWithoutSpecialistInput
    appointments?: AppointmentsCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistUncheckedCreateInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    userId: string
    username?: string | null
    image?: string | null
    price?: string | null
    phone?: string | null
    category?: string | null
    description?: string | null
    status?: string | null
    address?: string | null
    isMaster?: boolean
    createdAt?: Date | string
    timeSlots?: TimeSlotsUncheckedCreateNestedManyWithoutSpecialistInput
    appointments?: AppointmentsUncheckedCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpecialistNestedInput
    timeSlots?: TimeSlotsUpdateManyWithoutSpecialistNestedInput
    appointments?: AppointmentsUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlots?: TimeSlotsUncheckedUpdateManyWithoutSpecialistNestedInput
    appointments?: AppointmentsUncheckedUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistCreateManyInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    userId: string
    username?: string | null
    image?: string | null
    price?: string | null
    phone?: string | null
    category?: string | null
    description?: string | null
    status?: string | null
    address?: string | null
    isMaster?: boolean
    createdAt?: Date | string
  }

  export type SpecialistUpdateManyMutationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSlotsCreateInput = {
    dayOfWeek: number
    startTime: string
    endTime: string
    interval: number
    time?: TimeSlotsCreatetimeInput | string[]
    grafikName: string
    specialist: SpecialistCreateNestedOneWithoutTimeSlotsInput
  }

  export type TimeSlotsUncheckedCreateInput = {
    id?: number
    specialistId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    interval: number
    time?: TimeSlotsCreatetimeInput | string[]
    grafikName: string
  }

  export type TimeSlotsUpdateInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    time?: TimeSlotsUpdatetimeInput | string[]
    grafikName?: StringFieldUpdateOperationsInput | string
    specialist?: SpecialistUpdateOneRequiredWithoutTimeSlotsNestedInput
  }

  export type TimeSlotsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialistId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    time?: TimeSlotsUpdatetimeInput | string[]
    grafikName?: StringFieldUpdateOperationsInput | string
  }

  export type TimeSlotsCreateManyInput = {
    id?: number
    specialistId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    interval: number
    time?: TimeSlotsCreatetimeInput | string[]
    grafikName: string
  }

  export type TimeSlotsUpdateManyMutationInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    time?: TimeSlotsUpdatetimeInput | string[]
    grafikName?: StringFieldUpdateOperationsInput | string
  }

  export type TimeSlotsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialistId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    time?: TimeSlotsUpdatetimeInput | string[]
    grafikName?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentsCreateInput = {
    clientId: string
    firstName: string
    lastName: string
    date: string
    time: string
    phone: string
    specialistName?: string | null
    specialistLastName?: string | null
    specialistAddress?: string | null
    specialistPrice?: string | null
    specialistPhone?: string | null
    specialistCategory?: string | null
    specialist: SpecialistCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentsUncheckedCreateInput = {
    id?: number
    clientId: string
    firstName: string
    lastName: string
    specialistId: string
    date: string
    time: string
    phone: string
    specialistName?: string | null
    specialistLastName?: string | null
    specialistAddress?: string | null
    specialistPrice?: string | null
    specialistPhone?: string | null
    specialistCategory?: string | null
  }

  export type AppointmentsUpdateInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialistName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistLastName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistAddress?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPrice?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPhone?: NullableStringFieldUpdateOperationsInput | string | null
    specialistCategory?: NullableStringFieldUpdateOperationsInput | string | null
    specialist?: SpecialistUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    specialistId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialistName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistLastName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistAddress?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPrice?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPhone?: NullableStringFieldUpdateOperationsInput | string | null
    specialistCategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentsCreateManyInput = {
    id?: number
    clientId: string
    firstName: string
    lastName: string
    specialistId: string
    date: string
    time: string
    phone: string
    specialistName?: string | null
    specialistLastName?: string | null
    specialistAddress?: string | null
    specialistPrice?: string | null
    specialistPhone?: string | null
    specialistCategory?: string | null
  }

  export type AppointmentsUpdateManyMutationInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialistName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistLastName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistAddress?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPrice?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPhone?: NullableStringFieldUpdateOperationsInput | string | null
    specialistCategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    specialistId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialistName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistLastName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistAddress?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPrice?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPhone?: NullableStringFieldUpdateOperationsInput | string | null
    specialistCategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SpecialistNullableRelationFilter = {
    is?: SpecialistWhereInput | null
    isNot?: SpecialistWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    chatId?: SortOrder
    username?: SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    chatId?: SortOrder
    username?: SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    chatId?: SortOrder
    username?: SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TimeSlotsListRelationFilter = {
    every?: TimeSlotsWhereInput
    some?: TimeSlotsWhereInput
    none?: TimeSlotsWhereInput
  }

  export type AppointmentsListRelationFilter = {
    every?: AppointmentsWhereInput
    some?: AppointmentsWhereInput
    none?: AppointmentsWhereInput
  }

  export type TimeSlotsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialistCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    image?: SortOrder
    price?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    address?: SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
  }

  export type SpecialistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpecialistMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    image?: SortOrder
    price?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    address?: SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
  }

  export type SpecialistMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    image?: SortOrder
    price?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    address?: SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
  }

  export type SpecialistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SpecialistRelationFilter = {
    is?: SpecialistWhereInput
    isNot?: SpecialistWhereInput
  }

  export type TimeSlotsCountOrderByAggregateInput = {
    id?: SortOrder
    specialistId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    interval?: SortOrder
    time?: SortOrder
    grafikName?: SortOrder
  }

  export type TimeSlotsAvgOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    interval?: SortOrder
  }

  export type TimeSlotsMaxOrderByAggregateInput = {
    id?: SortOrder
    specialistId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    interval?: SortOrder
    grafikName?: SortOrder
  }

  export type TimeSlotsMinOrderByAggregateInput = {
    id?: SortOrder
    specialistId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    interval?: SortOrder
    grafikName?: SortOrder
  }

  export type TimeSlotsSumOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    interval?: SortOrder
  }

  export type AppointmentsCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    specialistId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    phone?: SortOrder
    specialistName?: SortOrder
    specialistLastName?: SortOrder
    specialistAddress?: SortOrder
    specialistPrice?: SortOrder
    specialistPhone?: SortOrder
    specialistCategory?: SortOrder
  }

  export type AppointmentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppointmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    specialistId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    phone?: SortOrder
    specialistName?: SortOrder
    specialistLastName?: SortOrder
    specialistAddress?: SortOrder
    specialistPrice?: SortOrder
    specialistPhone?: SortOrder
    specialistCategory?: SortOrder
  }

  export type AppointmentsMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    specialistId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    phone?: SortOrder
    specialistName?: SortOrder
    specialistLastName?: SortOrder
    specialistAddress?: SortOrder
    specialistPrice?: SortOrder
    specialistPhone?: SortOrder
    specialistCategory?: SortOrder
  }

  export type AppointmentsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpecialistCreateNestedOneWithoutUserInput = {
    create?: XOR<SpecialistCreateWithoutUserInput, SpecialistUncheckedCreateWithoutUserInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutUserInput
    connect?: SpecialistWhereUniqueInput
  }

  export type SpecialistUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SpecialistCreateWithoutUserInput, SpecialistUncheckedCreateWithoutUserInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutUserInput
    connect?: SpecialistWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SpecialistUpdateOneWithoutUserNestedInput = {
    create?: XOR<SpecialistCreateWithoutUserInput, SpecialistUncheckedCreateWithoutUserInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutUserInput
    upsert?: SpecialistUpsertWithoutUserInput
    disconnect?: SpecialistWhereInput | boolean
    delete?: SpecialistWhereInput | boolean
    connect?: SpecialistWhereUniqueInput
    update?: XOR<XOR<SpecialistUpdateToOneWithWhereWithoutUserInput, SpecialistUpdateWithoutUserInput>, SpecialistUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SpecialistUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SpecialistCreateWithoutUserInput, SpecialistUncheckedCreateWithoutUserInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutUserInput
    upsert?: SpecialistUpsertWithoutUserInput
    disconnect?: SpecialistWhereInput | boolean
    delete?: SpecialistWhereInput | boolean
    connect?: SpecialistWhereUniqueInput
    update?: XOR<XOR<SpecialistUpdateToOneWithWhereWithoutUserInput, SpecialistUpdateWithoutUserInput>, SpecialistUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSpecialistInput = {
    create?: XOR<UserCreateWithoutSpecialistInput, UserUncheckedCreateWithoutSpecialistInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpecialistInput
    connect?: UserWhereUniqueInput
  }

  export type TimeSlotsCreateNestedManyWithoutSpecialistInput = {
    create?: XOR<TimeSlotsCreateWithoutSpecialistInput, TimeSlotsUncheckedCreateWithoutSpecialistInput> | TimeSlotsCreateWithoutSpecialistInput[] | TimeSlotsUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: TimeSlotsCreateOrConnectWithoutSpecialistInput | TimeSlotsCreateOrConnectWithoutSpecialistInput[]
    createMany?: TimeSlotsCreateManySpecialistInputEnvelope
    connect?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
  }

  export type AppointmentsCreateNestedManyWithoutSpecialistInput = {
    create?: XOR<AppointmentsCreateWithoutSpecialistInput, AppointmentsUncheckedCreateWithoutSpecialistInput> | AppointmentsCreateWithoutSpecialistInput[] | AppointmentsUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutSpecialistInput | AppointmentsCreateOrConnectWithoutSpecialistInput[]
    createMany?: AppointmentsCreateManySpecialistInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type TimeSlotsUncheckedCreateNestedManyWithoutSpecialistInput = {
    create?: XOR<TimeSlotsCreateWithoutSpecialistInput, TimeSlotsUncheckedCreateWithoutSpecialistInput> | TimeSlotsCreateWithoutSpecialistInput[] | TimeSlotsUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: TimeSlotsCreateOrConnectWithoutSpecialistInput | TimeSlotsCreateOrConnectWithoutSpecialistInput[]
    createMany?: TimeSlotsCreateManySpecialistInputEnvelope
    connect?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
  }

  export type AppointmentsUncheckedCreateNestedManyWithoutSpecialistInput = {
    create?: XOR<AppointmentsCreateWithoutSpecialistInput, AppointmentsUncheckedCreateWithoutSpecialistInput> | AppointmentsCreateWithoutSpecialistInput[] | AppointmentsUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutSpecialistInput | AppointmentsCreateOrConnectWithoutSpecialistInput[]
    createMany?: AppointmentsCreateManySpecialistInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSpecialistNestedInput = {
    create?: XOR<UserCreateWithoutSpecialistInput, UserUncheckedCreateWithoutSpecialistInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpecialistInput
    upsert?: UserUpsertWithoutSpecialistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpecialistInput, UserUpdateWithoutSpecialistInput>, UserUncheckedUpdateWithoutSpecialistInput>
  }

  export type TimeSlotsUpdateManyWithoutSpecialistNestedInput = {
    create?: XOR<TimeSlotsCreateWithoutSpecialistInput, TimeSlotsUncheckedCreateWithoutSpecialistInput> | TimeSlotsCreateWithoutSpecialistInput[] | TimeSlotsUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: TimeSlotsCreateOrConnectWithoutSpecialistInput | TimeSlotsCreateOrConnectWithoutSpecialistInput[]
    upsert?: TimeSlotsUpsertWithWhereUniqueWithoutSpecialistInput | TimeSlotsUpsertWithWhereUniqueWithoutSpecialistInput[]
    createMany?: TimeSlotsCreateManySpecialistInputEnvelope
    set?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    disconnect?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    delete?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    connect?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    update?: TimeSlotsUpdateWithWhereUniqueWithoutSpecialistInput | TimeSlotsUpdateWithWhereUniqueWithoutSpecialistInput[]
    updateMany?: TimeSlotsUpdateManyWithWhereWithoutSpecialistInput | TimeSlotsUpdateManyWithWhereWithoutSpecialistInput[]
    deleteMany?: TimeSlotsScalarWhereInput | TimeSlotsScalarWhereInput[]
  }

  export type AppointmentsUpdateManyWithoutSpecialistNestedInput = {
    create?: XOR<AppointmentsCreateWithoutSpecialistInput, AppointmentsUncheckedCreateWithoutSpecialistInput> | AppointmentsCreateWithoutSpecialistInput[] | AppointmentsUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutSpecialistInput | AppointmentsCreateOrConnectWithoutSpecialistInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutSpecialistInput | AppointmentsUpsertWithWhereUniqueWithoutSpecialistInput[]
    createMany?: AppointmentsCreateManySpecialistInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutSpecialistInput | AppointmentsUpdateWithWhereUniqueWithoutSpecialistInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutSpecialistInput | AppointmentsUpdateManyWithWhereWithoutSpecialistInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type TimeSlotsUncheckedUpdateManyWithoutSpecialistNestedInput = {
    create?: XOR<TimeSlotsCreateWithoutSpecialistInput, TimeSlotsUncheckedCreateWithoutSpecialistInput> | TimeSlotsCreateWithoutSpecialistInput[] | TimeSlotsUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: TimeSlotsCreateOrConnectWithoutSpecialistInput | TimeSlotsCreateOrConnectWithoutSpecialistInput[]
    upsert?: TimeSlotsUpsertWithWhereUniqueWithoutSpecialistInput | TimeSlotsUpsertWithWhereUniqueWithoutSpecialistInput[]
    createMany?: TimeSlotsCreateManySpecialistInputEnvelope
    set?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    disconnect?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    delete?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    connect?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    update?: TimeSlotsUpdateWithWhereUniqueWithoutSpecialistInput | TimeSlotsUpdateWithWhereUniqueWithoutSpecialistInput[]
    updateMany?: TimeSlotsUpdateManyWithWhereWithoutSpecialistInput | TimeSlotsUpdateManyWithWhereWithoutSpecialistInput[]
    deleteMany?: TimeSlotsScalarWhereInput | TimeSlotsScalarWhereInput[]
  }

  export type AppointmentsUncheckedUpdateManyWithoutSpecialistNestedInput = {
    create?: XOR<AppointmentsCreateWithoutSpecialistInput, AppointmentsUncheckedCreateWithoutSpecialistInput> | AppointmentsCreateWithoutSpecialistInput[] | AppointmentsUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutSpecialistInput | AppointmentsCreateOrConnectWithoutSpecialistInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutSpecialistInput | AppointmentsUpsertWithWhereUniqueWithoutSpecialistInput[]
    createMany?: AppointmentsCreateManySpecialistInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutSpecialistInput | AppointmentsUpdateWithWhereUniqueWithoutSpecialistInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutSpecialistInput | AppointmentsUpdateManyWithWhereWithoutSpecialistInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type TimeSlotsCreatetimeInput = {
    set: string[]
  }

  export type SpecialistCreateNestedOneWithoutTimeSlotsInput = {
    create?: XOR<SpecialistCreateWithoutTimeSlotsInput, SpecialistUncheckedCreateWithoutTimeSlotsInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutTimeSlotsInput
    connect?: SpecialistWhereUniqueInput
  }

  export type TimeSlotsUpdatetimeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SpecialistUpdateOneRequiredWithoutTimeSlotsNestedInput = {
    create?: XOR<SpecialistCreateWithoutTimeSlotsInput, SpecialistUncheckedCreateWithoutTimeSlotsInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutTimeSlotsInput
    upsert?: SpecialistUpsertWithoutTimeSlotsInput
    connect?: SpecialistWhereUniqueInput
    update?: XOR<XOR<SpecialistUpdateToOneWithWhereWithoutTimeSlotsInput, SpecialistUpdateWithoutTimeSlotsInput>, SpecialistUncheckedUpdateWithoutTimeSlotsInput>
  }

  export type SpecialistCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<SpecialistCreateWithoutAppointmentsInput, SpecialistUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutAppointmentsInput
    connect?: SpecialistWhereUniqueInput
  }

  export type SpecialistUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<SpecialistCreateWithoutAppointmentsInput, SpecialistUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutAppointmentsInput
    upsert?: SpecialistUpsertWithoutAppointmentsInput
    connect?: SpecialistWhereUniqueInput
    update?: XOR<XOR<SpecialistUpdateToOneWithWhereWithoutAppointmentsInput, SpecialistUpdateWithoutAppointmentsInput>, SpecialistUncheckedUpdateWithoutAppointmentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SpecialistCreateWithoutUserInput = {
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    username?: string | null
    image?: string | null
    price?: string | null
    phone?: string | null
    category?: string | null
    description?: string | null
    status?: string | null
    address?: string | null
    isMaster?: boolean
    createdAt?: Date | string
    timeSlots?: TimeSlotsCreateNestedManyWithoutSpecialistInput
    appointments?: AppointmentsCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistUncheckedCreateWithoutUserInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    username?: string | null
    image?: string | null
    price?: string | null
    phone?: string | null
    category?: string | null
    description?: string | null
    status?: string | null
    address?: string | null
    isMaster?: boolean
    createdAt?: Date | string
    timeSlots?: TimeSlotsUncheckedCreateNestedManyWithoutSpecialistInput
    appointments?: AppointmentsUncheckedCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistCreateOrConnectWithoutUserInput = {
    where: SpecialistWhereUniqueInput
    create: XOR<SpecialistCreateWithoutUserInput, SpecialistUncheckedCreateWithoutUserInput>
  }

  export type SpecialistUpsertWithoutUserInput = {
    update: XOR<SpecialistUpdateWithoutUserInput, SpecialistUncheckedUpdateWithoutUserInput>
    create: XOR<SpecialistCreateWithoutUserInput, SpecialistUncheckedCreateWithoutUserInput>
    where?: SpecialistWhereInput
  }

  export type SpecialistUpdateToOneWithWhereWithoutUserInput = {
    where?: SpecialistWhereInput
    data: XOR<SpecialistUpdateWithoutUserInput, SpecialistUncheckedUpdateWithoutUserInput>
  }

  export type SpecialistUpdateWithoutUserInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlots?: TimeSlotsUpdateManyWithoutSpecialistNestedInput
    appointments?: AppointmentsUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlots?: TimeSlotsUncheckedUpdateManyWithoutSpecialistNestedInput
    appointments?: AppointmentsUncheckedUpdateManyWithoutSpecialistNestedInput
  }

  export type UserCreateWithoutSpecialistInput = {
    telegramId: string
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    username?: string | null
    isMaster?: boolean
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSpecialistInput = {
    id?: number
    telegramId: string
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    username?: string | null
    isMaster?: boolean
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSpecialistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpecialistInput, UserUncheckedCreateWithoutSpecialistInput>
  }

  export type TimeSlotsCreateWithoutSpecialistInput = {
    dayOfWeek: number
    startTime: string
    endTime: string
    interval: number
    time?: TimeSlotsCreatetimeInput | string[]
    grafikName: string
  }

  export type TimeSlotsUncheckedCreateWithoutSpecialistInput = {
    id?: number
    dayOfWeek: number
    startTime: string
    endTime: string
    interval: number
    time?: TimeSlotsCreatetimeInput | string[]
    grafikName: string
  }

  export type TimeSlotsCreateOrConnectWithoutSpecialistInput = {
    where: TimeSlotsWhereUniqueInput
    create: XOR<TimeSlotsCreateWithoutSpecialistInput, TimeSlotsUncheckedCreateWithoutSpecialistInput>
  }

  export type TimeSlotsCreateManySpecialistInputEnvelope = {
    data: TimeSlotsCreateManySpecialistInput | TimeSlotsCreateManySpecialistInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentsCreateWithoutSpecialistInput = {
    clientId: string
    firstName: string
    lastName: string
    date: string
    time: string
    phone: string
    specialistName?: string | null
    specialistLastName?: string | null
    specialistAddress?: string | null
    specialistPrice?: string | null
    specialistPhone?: string | null
    specialistCategory?: string | null
  }

  export type AppointmentsUncheckedCreateWithoutSpecialistInput = {
    id?: number
    clientId: string
    firstName: string
    lastName: string
    date: string
    time: string
    phone: string
    specialistName?: string | null
    specialistLastName?: string | null
    specialistAddress?: string | null
    specialistPrice?: string | null
    specialistPhone?: string | null
    specialistCategory?: string | null
  }

  export type AppointmentsCreateOrConnectWithoutSpecialistInput = {
    where: AppointmentsWhereUniqueInput
    create: XOR<AppointmentsCreateWithoutSpecialistInput, AppointmentsUncheckedCreateWithoutSpecialistInput>
  }

  export type AppointmentsCreateManySpecialistInputEnvelope = {
    data: AppointmentsCreateManySpecialistInput | AppointmentsCreateManySpecialistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSpecialistInput = {
    update: XOR<UserUpdateWithoutSpecialistInput, UserUncheckedUpdateWithoutSpecialistInput>
    create: XOR<UserCreateWithoutSpecialistInput, UserUncheckedCreateWithoutSpecialistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpecialistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpecialistInput, UserUncheckedUpdateWithoutSpecialistInput>
  }

  export type UserUpdateWithoutSpecialistInput = {
    telegramId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSpecialistInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSlotsUpsertWithWhereUniqueWithoutSpecialistInput = {
    where: TimeSlotsWhereUniqueInput
    update: XOR<TimeSlotsUpdateWithoutSpecialistInput, TimeSlotsUncheckedUpdateWithoutSpecialistInput>
    create: XOR<TimeSlotsCreateWithoutSpecialistInput, TimeSlotsUncheckedCreateWithoutSpecialistInput>
  }

  export type TimeSlotsUpdateWithWhereUniqueWithoutSpecialistInput = {
    where: TimeSlotsWhereUniqueInput
    data: XOR<TimeSlotsUpdateWithoutSpecialistInput, TimeSlotsUncheckedUpdateWithoutSpecialistInput>
  }

  export type TimeSlotsUpdateManyWithWhereWithoutSpecialistInput = {
    where: TimeSlotsScalarWhereInput
    data: XOR<TimeSlotsUpdateManyMutationInput, TimeSlotsUncheckedUpdateManyWithoutSpecialistInput>
  }

  export type TimeSlotsScalarWhereInput = {
    AND?: TimeSlotsScalarWhereInput | TimeSlotsScalarWhereInput[]
    OR?: TimeSlotsScalarWhereInput[]
    NOT?: TimeSlotsScalarWhereInput | TimeSlotsScalarWhereInput[]
    id?: IntFilter<"TimeSlots"> | number
    specialistId?: StringFilter<"TimeSlots"> | string
    dayOfWeek?: IntFilter<"TimeSlots"> | number
    startTime?: StringFilter<"TimeSlots"> | string
    endTime?: StringFilter<"TimeSlots"> | string
    interval?: IntFilter<"TimeSlots"> | number
    time?: StringNullableListFilter<"TimeSlots">
    grafikName?: StringFilter<"TimeSlots"> | string
  }

  export type AppointmentsUpsertWithWhereUniqueWithoutSpecialistInput = {
    where: AppointmentsWhereUniqueInput
    update: XOR<AppointmentsUpdateWithoutSpecialistInput, AppointmentsUncheckedUpdateWithoutSpecialistInput>
    create: XOR<AppointmentsCreateWithoutSpecialistInput, AppointmentsUncheckedCreateWithoutSpecialistInput>
  }

  export type AppointmentsUpdateWithWhereUniqueWithoutSpecialistInput = {
    where: AppointmentsWhereUniqueInput
    data: XOR<AppointmentsUpdateWithoutSpecialistInput, AppointmentsUncheckedUpdateWithoutSpecialistInput>
  }

  export type AppointmentsUpdateManyWithWhereWithoutSpecialistInput = {
    where: AppointmentsScalarWhereInput
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyWithoutSpecialistInput>
  }

  export type AppointmentsScalarWhereInput = {
    AND?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
    OR?: AppointmentsScalarWhereInput[]
    NOT?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
    id?: IntFilter<"Appointments"> | number
    clientId?: StringFilter<"Appointments"> | string
    firstName?: StringFilter<"Appointments"> | string
    lastName?: StringFilter<"Appointments"> | string
    specialistId?: StringFilter<"Appointments"> | string
    date?: StringFilter<"Appointments"> | string
    time?: StringFilter<"Appointments"> | string
    phone?: StringFilter<"Appointments"> | string
    specialistName?: StringNullableFilter<"Appointments"> | string | null
    specialistLastName?: StringNullableFilter<"Appointments"> | string | null
    specialistAddress?: StringNullableFilter<"Appointments"> | string | null
    specialistPrice?: StringNullableFilter<"Appointments"> | string | null
    specialistPhone?: StringNullableFilter<"Appointments"> | string | null
    specialistCategory?: StringNullableFilter<"Appointments"> | string | null
  }

  export type SpecialistCreateWithoutTimeSlotsInput = {
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    username?: string | null
    image?: string | null
    price?: string | null
    phone?: string | null
    category?: string | null
    description?: string | null
    status?: string | null
    address?: string | null
    isMaster?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSpecialistInput
    appointments?: AppointmentsCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistUncheckedCreateWithoutTimeSlotsInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    userId: string
    username?: string | null
    image?: string | null
    price?: string | null
    phone?: string | null
    category?: string | null
    description?: string | null
    status?: string | null
    address?: string | null
    isMaster?: boolean
    createdAt?: Date | string
    appointments?: AppointmentsUncheckedCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistCreateOrConnectWithoutTimeSlotsInput = {
    where: SpecialistWhereUniqueInput
    create: XOR<SpecialistCreateWithoutTimeSlotsInput, SpecialistUncheckedCreateWithoutTimeSlotsInput>
  }

  export type SpecialistUpsertWithoutTimeSlotsInput = {
    update: XOR<SpecialistUpdateWithoutTimeSlotsInput, SpecialistUncheckedUpdateWithoutTimeSlotsInput>
    create: XOR<SpecialistCreateWithoutTimeSlotsInput, SpecialistUncheckedCreateWithoutTimeSlotsInput>
    where?: SpecialistWhereInput
  }

  export type SpecialistUpdateToOneWithWhereWithoutTimeSlotsInput = {
    where?: SpecialistWhereInput
    data: XOR<SpecialistUpdateWithoutTimeSlotsInput, SpecialistUncheckedUpdateWithoutTimeSlotsInput>
  }

  export type SpecialistUpdateWithoutTimeSlotsInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpecialistNestedInput
    appointments?: AppointmentsUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistUncheckedUpdateWithoutTimeSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentsUncheckedUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistCreateWithoutAppointmentsInput = {
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    username?: string | null
    image?: string | null
    price?: string | null
    phone?: string | null
    category?: string | null
    description?: string | null
    status?: string | null
    address?: string | null
    isMaster?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSpecialistInput
    timeSlots?: TimeSlotsCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    chatId?: string | null
    userId: string
    username?: string | null
    image?: string | null
    price?: string | null
    phone?: string | null
    category?: string | null
    description?: string | null
    status?: string | null
    address?: string | null
    isMaster?: boolean
    createdAt?: Date | string
    timeSlots?: TimeSlotsUncheckedCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistCreateOrConnectWithoutAppointmentsInput = {
    where: SpecialistWhereUniqueInput
    create: XOR<SpecialistCreateWithoutAppointmentsInput, SpecialistUncheckedCreateWithoutAppointmentsInput>
  }

  export type SpecialistUpsertWithoutAppointmentsInput = {
    update: XOR<SpecialistUpdateWithoutAppointmentsInput, SpecialistUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<SpecialistCreateWithoutAppointmentsInput, SpecialistUncheckedCreateWithoutAppointmentsInput>
    where?: SpecialistWhereInput
  }

  export type SpecialistUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: SpecialistWhereInput
    data: XOR<SpecialistUpdateWithoutAppointmentsInput, SpecialistUncheckedUpdateWithoutAppointmentsInput>
  }

  export type SpecialistUpdateWithoutAppointmentsInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpecialistNestedInput
    timeSlots?: TimeSlotsUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlots?: TimeSlotsUncheckedUpdateManyWithoutSpecialistNestedInput
  }

  export type TimeSlotsCreateManySpecialistInput = {
    id?: number
    dayOfWeek: number
    startTime: string
    endTime: string
    interval: number
    time?: TimeSlotsCreatetimeInput | string[]
    grafikName: string
  }

  export type AppointmentsCreateManySpecialistInput = {
    id?: number
    clientId: string
    firstName: string
    lastName: string
    date: string
    time: string
    phone: string
    specialistName?: string | null
    specialistLastName?: string | null
    specialistAddress?: string | null
    specialistPrice?: string | null
    specialistPhone?: string | null
    specialistCategory?: string | null
  }

  export type TimeSlotsUpdateWithoutSpecialistInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    time?: TimeSlotsUpdatetimeInput | string[]
    grafikName?: StringFieldUpdateOperationsInput | string
  }

  export type TimeSlotsUncheckedUpdateWithoutSpecialistInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    time?: TimeSlotsUpdatetimeInput | string[]
    grafikName?: StringFieldUpdateOperationsInput | string
  }

  export type TimeSlotsUncheckedUpdateManyWithoutSpecialistInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    time?: TimeSlotsUpdatetimeInput | string[]
    grafikName?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentsUpdateWithoutSpecialistInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialistName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistLastName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistAddress?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPrice?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPhone?: NullableStringFieldUpdateOperationsInput | string | null
    specialistCategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentsUncheckedUpdateWithoutSpecialistInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialistName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistLastName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistAddress?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPrice?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPhone?: NullableStringFieldUpdateOperationsInput | string | null
    specialistCategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentsUncheckedUpdateManyWithoutSpecialistInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialistName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistLastName?: NullableStringFieldUpdateOperationsInput | string | null
    specialistAddress?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPrice?: NullableStringFieldUpdateOperationsInput | string | null
    specialistPhone?: NullableStringFieldUpdateOperationsInput | string | null
    specialistCategory?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SpecialistCountOutputTypeDefaultArgs instead
     */
    export type SpecialistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpecialistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpecialistDefaultArgs instead
     */
    export type SpecialistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpecialistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimeSlotsDefaultArgs instead
     */
    export type TimeSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimeSlotsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppointmentsDefaultArgs instead
     */
    export type AppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppointmentsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}