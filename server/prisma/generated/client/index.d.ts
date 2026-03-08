
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
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model AdminReply
 * 
 */
export type AdminReply = $Result.DefaultSelection<Prisma.$AdminReplyPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderStatusHistory
 * 
 */
export type OrderStatusHistory = $Result.DefaultSelection<Prisma.$OrderStatusHistoryPayload>
/**
 * Model ReviewToken
 * 
 */
export type ReviewToken = $Result.DefaultSelection<Prisma.$ReviewTokenPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model SiteSettingVersion
 * 
 */
export type SiteSettingVersion = $Result.DefaultSelection<Prisma.$SiteSettingVersionPayload>
/**
 * Model WorkItem
 * 
 */
export type WorkItem = $Result.DefaultSelection<Prisma.$WorkItemPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model DevEmail
 * 
 */
export type DevEmail = $Result.DefaultSelection<Prisma.$DevEmailPayload>
/**
 * Model EmailEvent
 * 
 */
export type EmailEvent = $Result.DefaultSelection<Prisma.$EmailEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Reviews
 * const reviews = await prisma.review.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminReply`: Exposes CRUD operations for the **AdminReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminReplies
    * const adminReplies = await prisma.adminReply.findMany()
    * ```
    */
  get adminReply(): Prisma.AdminReplyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderStatusHistory`: Exposes CRUD operations for the **OrderStatusHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderStatusHistories
    * const orderStatusHistories = await prisma.orderStatusHistory.findMany()
    * ```
    */
  get orderStatusHistory(): Prisma.OrderStatusHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewToken`: Exposes CRUD operations for the **ReviewToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewTokens
    * const reviewTokens = await prisma.reviewToken.findMany()
    * ```
    */
  get reviewToken(): Prisma.ReviewTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteSettingVersion`: Exposes CRUD operations for the **SiteSettingVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteSettingVersions
    * const siteSettingVersions = await prisma.siteSettingVersion.findMany()
    * ```
    */
  get siteSettingVersion(): Prisma.SiteSettingVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workItem`: Exposes CRUD operations for the **WorkItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkItems
    * const workItems = await prisma.workItem.findMany()
    * ```
    */
  get workItem(): Prisma.WorkItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.devEmail`: Exposes CRUD operations for the **DevEmail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DevEmails
    * const devEmails = await prisma.devEmail.findMany()
    * ```
    */
  get devEmail(): Prisma.DevEmailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailEvent`: Exposes CRUD operations for the **EmailEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailEvents
    * const emailEvents = await prisma.emailEvent.findMany()
    * ```
    */
  get emailEvent(): Prisma.EmailEventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Review: 'Review',
    AdminReply: 'AdminReply',
    Order: 'Order',
    OrderStatusHistory: 'OrderStatusHistory',
    ReviewToken: 'ReviewToken',
    AdminUser: 'AdminUser',
    SiteSettingVersion: 'SiteSettingVersion',
    WorkItem: 'WorkItem',
    AuditLog: 'AuditLog',
    DevEmail: 'DevEmail',
    EmailEvent: 'EmailEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "review" | "adminReply" | "order" | "orderStatusHistory" | "reviewToken" | "adminUser" | "siteSettingVersion" | "workItem" | "auditLog" | "devEmail" | "emailEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      AdminReply: {
        payload: Prisma.$AdminReplyPayload<ExtArgs>
        fields: Prisma.AdminReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReplyPayload>
          }
          findFirst: {
            args: Prisma.AdminReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReplyPayload>
          }
          findMany: {
            args: Prisma.AdminReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReplyPayload>[]
          }
          create: {
            args: Prisma.AdminReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReplyPayload>
          }
          createMany: {
            args: Prisma.AdminReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReplyPayload>[]
          }
          delete: {
            args: Prisma.AdminReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReplyPayload>
          }
          update: {
            args: Prisma.AdminReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReplyPayload>
          }
          deleteMany: {
            args: Prisma.AdminReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminReplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReplyPayload>[]
          }
          upsert: {
            args: Prisma.AdminReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminReplyPayload>
          }
          aggregate: {
            args: Prisma.AdminReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminReply>
          }
          groupBy: {
            args: Prisma.AdminReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminReplyCountArgs<ExtArgs>
            result: $Utils.Optional<AdminReplyCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderStatusHistory: {
        payload: Prisma.$OrderStatusHistoryPayload<ExtArgs>
        fields: Prisma.OrderStatusHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderStatusHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderStatusHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>
          }
          findFirst: {
            args: Prisma.OrderStatusHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderStatusHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>
          }
          findMany: {
            args: Prisma.OrderStatusHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>[]
          }
          create: {
            args: Prisma.OrderStatusHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>
          }
          createMany: {
            args: Prisma.OrderStatusHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderStatusHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>[]
          }
          delete: {
            args: Prisma.OrderStatusHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>
          }
          update: {
            args: Prisma.OrderStatusHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>
          }
          deleteMany: {
            args: Prisma.OrderStatusHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderStatusHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderStatusHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>[]
          }
          upsert: {
            args: Prisma.OrderStatusHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>
          }
          aggregate: {
            args: Prisma.OrderStatusHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderStatusHistory>
          }
          groupBy: {
            args: Prisma.OrderStatusHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderStatusHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderStatusHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<OrderStatusHistoryCountAggregateOutputType> | number
          }
        }
      }
      ReviewToken: {
        payload: Prisma.$ReviewTokenPayload<ExtArgs>
        fields: Prisma.ReviewTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewTokenPayload>
          }
          findFirst: {
            args: Prisma.ReviewTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewTokenPayload>
          }
          findMany: {
            args: Prisma.ReviewTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewTokenPayload>[]
          }
          create: {
            args: Prisma.ReviewTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewTokenPayload>
          }
          createMany: {
            args: Prisma.ReviewTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewTokenPayload>[]
          }
          delete: {
            args: Prisma.ReviewTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewTokenPayload>
          }
          update: {
            args: Prisma.ReviewTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewTokenPayload>
          }
          deleteMany: {
            args: Prisma.ReviewTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewTokenPayload>[]
          }
          upsert: {
            args: Prisma.ReviewTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewTokenPayload>
          }
          aggregate: {
            args: Prisma.ReviewTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewToken>
          }
          groupBy: {
            args: Prisma.ReviewTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewTokenCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      SiteSettingVersion: {
        payload: Prisma.$SiteSettingVersionPayload<ExtArgs>
        fields: Prisma.SiteSettingVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteSettingVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteSettingVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingVersionPayload>
          }
          findFirst: {
            args: Prisma.SiteSettingVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteSettingVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingVersionPayload>
          }
          findMany: {
            args: Prisma.SiteSettingVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingVersionPayload>[]
          }
          create: {
            args: Prisma.SiteSettingVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingVersionPayload>
          }
          createMany: {
            args: Prisma.SiteSettingVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteSettingVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingVersionPayload>[]
          }
          delete: {
            args: Prisma.SiteSettingVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingVersionPayload>
          }
          update: {
            args: Prisma.SiteSettingVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingVersionPayload>
          }
          deleteMany: {
            args: Prisma.SiteSettingVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteSettingVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteSettingVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingVersionPayload>[]
          }
          upsert: {
            args: Prisma.SiteSettingVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingVersionPayload>
          }
          aggregate: {
            args: Prisma.SiteSettingVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteSettingVersion>
          }
          groupBy: {
            args: Prisma.SiteSettingVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteSettingVersionCountArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingVersionCountAggregateOutputType> | number
          }
        }
      }
      WorkItem: {
        payload: Prisma.$WorkItemPayload<ExtArgs>
        fields: Prisma.WorkItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          findFirst: {
            args: Prisma.WorkItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          findMany: {
            args: Prisma.WorkItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>[]
          }
          create: {
            args: Prisma.WorkItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          createMany: {
            args: Prisma.WorkItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>[]
          }
          delete: {
            args: Prisma.WorkItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          update: {
            args: Prisma.WorkItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          deleteMany: {
            args: Prisma.WorkItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>[]
          }
          upsert: {
            args: Prisma.WorkItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          aggregate: {
            args: Prisma.WorkItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkItem>
          }
          groupBy: {
            args: Prisma.WorkItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkItemCountArgs<ExtArgs>
            result: $Utils.Optional<WorkItemCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      DevEmail: {
        payload: Prisma.$DevEmailPayload<ExtArgs>
        fields: Prisma.DevEmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevEmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevEmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevEmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevEmailPayload>
          }
          findFirst: {
            args: Prisma.DevEmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevEmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevEmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevEmailPayload>
          }
          findMany: {
            args: Prisma.DevEmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevEmailPayload>[]
          }
          create: {
            args: Prisma.DevEmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevEmailPayload>
          }
          createMany: {
            args: Prisma.DevEmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DevEmailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevEmailPayload>[]
          }
          delete: {
            args: Prisma.DevEmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevEmailPayload>
          }
          update: {
            args: Prisma.DevEmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevEmailPayload>
          }
          deleteMany: {
            args: Prisma.DevEmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevEmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DevEmailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevEmailPayload>[]
          }
          upsert: {
            args: Prisma.DevEmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevEmailPayload>
          }
          aggregate: {
            args: Prisma.DevEmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevEmail>
          }
          groupBy: {
            args: Prisma.DevEmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevEmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevEmailCountArgs<ExtArgs>
            result: $Utils.Optional<DevEmailCountAggregateOutputType> | number
          }
        }
      }
      EmailEvent: {
        payload: Prisma.$EmailEventPayload<ExtArgs>
        fields: Prisma.EmailEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>
          }
          findFirst: {
            args: Prisma.EmailEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>
          }
          findMany: {
            args: Prisma.EmailEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>[]
          }
          create: {
            args: Prisma.EmailEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>
          }
          createMany: {
            args: Prisma.EmailEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>[]
          }
          delete: {
            args: Prisma.EmailEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>
          }
          update: {
            args: Prisma.EmailEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>
          }
          deleteMany: {
            args: Prisma.EmailEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>[]
          }
          upsert: {
            args: Prisma.EmailEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailEventPayload>
          }
          aggregate: {
            args: Prisma.EmailEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailEvent>
          }
          groupBy: {
            args: Prisma.EmailEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailEventCountArgs<ExtArgs>
            result: $Utils.Optional<EmailEventCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    review?: ReviewOmit
    adminReply?: AdminReplyOmit
    order?: OrderOmit
    orderStatusHistory?: OrderStatusHistoryOmit
    reviewToken?: ReviewTokenOmit
    adminUser?: AdminUserOmit
    siteSettingVersion?: SiteSettingVersionOmit
    workItem?: WorkItemOmit
    auditLog?: AuditLogOmit
    devEmail?: DevEmailOmit
    emailEvent?: EmailEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    statusHistory: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusHistory?: boolean | OrderCountOutputTypeCountStatusHistoryArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountStatusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderStatusHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    title: string | null
    comment: string | null
    displayName: string | null
    email: string | null
    status: string | null
    ipAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    title: string | null
    comment: string | null
    displayName: string | null
    email: string | null
    status: string | null
    ipAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    title: number
    comment: number
    displayName: number
    email: number
    status: number
    ipAddress: number
    createdAt: number
    updatedAt: number
    orderId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    title?: true
    comment?: true
    displayName?: true
    email?: true
    status?: true
    ipAddress?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    title?: true
    comment?: true
    displayName?: true
    email?: true
    status?: true
    ipAddress?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    title?: true
    comment?: true
    displayName?: true
    email?: true
    status?: true
    ipAddress?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    title: string | null
    comment: string
    displayName: string
    email: string
    status: string
    ipAddress: string | null
    createdAt: Date
    updatedAt: Date
    orderId: string | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    displayName?: boolean
    email?: boolean
    status?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    order?: boolean | Review$orderArgs<ExtArgs>
    reply?: boolean | Review$replyArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    displayName?: boolean
    email?: boolean
    status?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    order?: boolean | Review$orderArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    displayName?: boolean
    email?: boolean
    status?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    order?: boolean | Review$orderArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    displayName?: boolean
    email?: boolean
    status?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "title" | "comment" | "displayName" | "email" | "status" | "ipAddress" | "createdAt" | "updatedAt" | "orderId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | Review$orderArgs<ExtArgs>
    reply?: boolean | Review$replyArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | Review$orderArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | Review$orderArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs> | null
      reply: Prisma.$AdminReplyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      title: string | null
      comment: string
      displayName: string
      email: string
      status: string
      ipAddress: string | null
      createdAt: Date
      updatedAt: Date
      orderId: string | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends Review$orderArgs<ExtArgs> = {}>(args?: Subset<T, Review$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reply<T extends Review$replyArgs<ExtArgs> = {}>(args?: Subset<T, Review$replyArgs<ExtArgs>>): Prisma__AdminReplyClient<$Result.GetResult<Prisma.$AdminReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly title: FieldRef<"Review", 'String'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly displayName: FieldRef<"Review", 'String'>
    readonly email: FieldRef<"Review", 'String'>
    readonly status: FieldRef<"Review", 'String'>
    readonly ipAddress: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
    readonly orderId: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.order
   */
  export type Review$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * Review.reply
   */
  export type Review$replyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyInclude<ExtArgs> | null
    where?: AdminReplyWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model AdminReply
   */

  export type AggregateAdminReply = {
    _count: AdminReplyCountAggregateOutputType | null
    _min: AdminReplyMinAggregateOutputType | null
    _max: AdminReplyMaxAggregateOutputType | null
  }

  export type AdminReplyMinAggregateOutputType = {
    id: string | null
    content: string | null
    reviewId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminReplyMaxAggregateOutputType = {
    id: string | null
    content: string | null
    reviewId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminReplyCountAggregateOutputType = {
    id: number
    content: number
    reviewId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminReplyMinAggregateInputType = {
    id?: true
    content?: true
    reviewId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminReplyMaxAggregateInputType = {
    id?: true
    content?: true
    reviewId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminReplyCountAggregateInputType = {
    id?: true
    content?: true
    reviewId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminReply to aggregate.
     */
    where?: AdminReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminReplies to fetch.
     */
    orderBy?: AdminReplyOrderByWithRelationInput | AdminReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminReplies
    **/
    _count?: true | AdminReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminReplyMaxAggregateInputType
  }

  export type GetAdminReplyAggregateType<T extends AdminReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminReply[P]>
      : GetScalarType<T[P], AggregateAdminReply[P]>
  }




  export type AdminReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminReplyWhereInput
    orderBy?: AdminReplyOrderByWithAggregationInput | AdminReplyOrderByWithAggregationInput[]
    by: AdminReplyScalarFieldEnum[] | AdminReplyScalarFieldEnum
    having?: AdminReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminReplyCountAggregateInputType | true
    _min?: AdminReplyMinAggregateInputType
    _max?: AdminReplyMaxAggregateInputType
  }

  export type AdminReplyGroupByOutputType = {
    id: string
    content: string
    reviewId: string
    createdAt: Date
    updatedAt: Date
    _count: AdminReplyCountAggregateOutputType | null
    _min: AdminReplyMinAggregateOutputType | null
    _max: AdminReplyMaxAggregateOutputType | null
  }

  type GetAdminReplyGroupByPayload<T extends AdminReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminReplyGroupByOutputType[P]>
            : GetScalarType<T[P], AdminReplyGroupByOutputType[P]>
        }
      >
    >


  export type AdminReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    reviewId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminReply"]>

  export type AdminReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    reviewId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminReply"]>

  export type AdminReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    reviewId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminReply"]>

  export type AdminReplySelectScalar = {
    id?: boolean
    content?: boolean
    reviewId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "reviewId" | "createdAt" | "updatedAt", ExtArgs["result"]["adminReply"]>
  export type AdminReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type AdminReplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type AdminReplyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $AdminReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminReply"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      reviewId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminReply"]>
    composites: {}
  }

  type AdminReplyGetPayload<S extends boolean | null | undefined | AdminReplyDefaultArgs> = $Result.GetResult<Prisma.$AdminReplyPayload, S>

  type AdminReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminReplyCountAggregateInputType | true
    }

  export interface AdminReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminReply'], meta: { name: 'AdminReply' } }
    /**
     * Find zero or one AdminReply that matches the filter.
     * @param {AdminReplyFindUniqueArgs} args - Arguments to find a AdminReply
     * @example
     * // Get one AdminReply
     * const adminReply = await prisma.adminReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminReplyFindUniqueArgs>(args: SelectSubset<T, AdminReplyFindUniqueArgs<ExtArgs>>): Prisma__AdminReplyClient<$Result.GetResult<Prisma.$AdminReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminReply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminReplyFindUniqueOrThrowArgs} args - Arguments to find a AdminReply
     * @example
     * // Get one AdminReply
     * const adminReply = await prisma.adminReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminReplyClient<$Result.GetResult<Prisma.$AdminReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReplyFindFirstArgs} args - Arguments to find a AdminReply
     * @example
     * // Get one AdminReply
     * const adminReply = await prisma.adminReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminReplyFindFirstArgs>(args?: SelectSubset<T, AdminReplyFindFirstArgs<ExtArgs>>): Prisma__AdminReplyClient<$Result.GetResult<Prisma.$AdminReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminReply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReplyFindFirstOrThrowArgs} args - Arguments to find a AdminReply
     * @example
     * // Get one AdminReply
     * const adminReply = await prisma.adminReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminReplyClient<$Result.GetResult<Prisma.$AdminReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminReplies
     * const adminReplies = await prisma.adminReply.findMany()
     * 
     * // Get first 10 AdminReplies
     * const adminReplies = await prisma.adminReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminReplyWithIdOnly = await prisma.adminReply.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminReplyFindManyArgs>(args?: SelectSubset<T, AdminReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminReply.
     * @param {AdminReplyCreateArgs} args - Arguments to create a AdminReply.
     * @example
     * // Create one AdminReply
     * const AdminReply = await prisma.adminReply.create({
     *   data: {
     *     // ... data to create a AdminReply
     *   }
     * })
     * 
     */
    create<T extends AdminReplyCreateArgs>(args: SelectSubset<T, AdminReplyCreateArgs<ExtArgs>>): Prisma__AdminReplyClient<$Result.GetResult<Prisma.$AdminReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminReplies.
     * @param {AdminReplyCreateManyArgs} args - Arguments to create many AdminReplies.
     * @example
     * // Create many AdminReplies
     * const adminReply = await prisma.adminReply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminReplyCreateManyArgs>(args?: SelectSubset<T, AdminReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminReplies and returns the data saved in the database.
     * @param {AdminReplyCreateManyAndReturnArgs} args - Arguments to create many AdminReplies.
     * @example
     * // Create many AdminReplies
     * const adminReply = await prisma.adminReply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminReplies and only return the `id`
     * const adminReplyWithIdOnly = await prisma.adminReply.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminReply.
     * @param {AdminReplyDeleteArgs} args - Arguments to delete one AdminReply.
     * @example
     * // Delete one AdminReply
     * const AdminReply = await prisma.adminReply.delete({
     *   where: {
     *     // ... filter to delete one AdminReply
     *   }
     * })
     * 
     */
    delete<T extends AdminReplyDeleteArgs>(args: SelectSubset<T, AdminReplyDeleteArgs<ExtArgs>>): Prisma__AdminReplyClient<$Result.GetResult<Prisma.$AdminReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminReply.
     * @param {AdminReplyUpdateArgs} args - Arguments to update one AdminReply.
     * @example
     * // Update one AdminReply
     * const adminReply = await prisma.adminReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminReplyUpdateArgs>(args: SelectSubset<T, AdminReplyUpdateArgs<ExtArgs>>): Prisma__AdminReplyClient<$Result.GetResult<Prisma.$AdminReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminReplies.
     * @param {AdminReplyDeleteManyArgs} args - Arguments to filter AdminReplies to delete.
     * @example
     * // Delete a few AdminReplies
     * const { count } = await prisma.adminReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminReplyDeleteManyArgs>(args?: SelectSubset<T, AdminReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminReplies
     * const adminReply = await prisma.adminReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminReplyUpdateManyArgs>(args: SelectSubset<T, AdminReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminReplies and returns the data updated in the database.
     * @param {AdminReplyUpdateManyAndReturnArgs} args - Arguments to update many AdminReplies.
     * @example
     * // Update many AdminReplies
     * const adminReply = await prisma.adminReply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminReplies and only return the `id`
     * const adminReplyWithIdOnly = await prisma.adminReply.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminReplyUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminReply.
     * @param {AdminReplyUpsertArgs} args - Arguments to update or create a AdminReply.
     * @example
     * // Update or create a AdminReply
     * const adminReply = await prisma.adminReply.upsert({
     *   create: {
     *     // ... data to create a AdminReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminReply we want to update
     *   }
     * })
     */
    upsert<T extends AdminReplyUpsertArgs>(args: SelectSubset<T, AdminReplyUpsertArgs<ExtArgs>>): Prisma__AdminReplyClient<$Result.GetResult<Prisma.$AdminReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReplyCountArgs} args - Arguments to filter AdminReplies to count.
     * @example
     * // Count the number of AdminReplies
     * const count = await prisma.adminReply.count({
     *   where: {
     *     // ... the filter for the AdminReplies we want to count
     *   }
     * })
    **/
    count<T extends AdminReplyCountArgs>(
      args?: Subset<T, AdminReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminReplyAggregateArgs>(args: Subset<T, AdminReplyAggregateArgs>): Prisma.PrismaPromise<GetAdminReplyAggregateType<T>>

    /**
     * Group by AdminReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminReplyGroupByArgs} args - Group by arguments.
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
      T extends AdminReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminReplyGroupByArgs['orderBy'] }
        : { orderBy?: AdminReplyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminReply model
   */
  readonly fields: AdminReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AdminReply model
   */
  interface AdminReplyFieldRefs {
    readonly id: FieldRef<"AdminReply", 'String'>
    readonly content: FieldRef<"AdminReply", 'String'>
    readonly reviewId: FieldRef<"AdminReply", 'String'>
    readonly createdAt: FieldRef<"AdminReply", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminReply", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminReply findUnique
   */
  export type AdminReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyInclude<ExtArgs> | null
    /**
     * Filter, which AdminReply to fetch.
     */
    where: AdminReplyWhereUniqueInput
  }

  /**
   * AdminReply findUniqueOrThrow
   */
  export type AdminReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyInclude<ExtArgs> | null
    /**
     * Filter, which AdminReply to fetch.
     */
    where: AdminReplyWhereUniqueInput
  }

  /**
   * AdminReply findFirst
   */
  export type AdminReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyInclude<ExtArgs> | null
    /**
     * Filter, which AdminReply to fetch.
     */
    where?: AdminReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminReplies to fetch.
     */
    orderBy?: AdminReplyOrderByWithRelationInput | AdminReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminReplies.
     */
    cursor?: AdminReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminReplies.
     */
    distinct?: AdminReplyScalarFieldEnum | AdminReplyScalarFieldEnum[]
  }

  /**
   * AdminReply findFirstOrThrow
   */
  export type AdminReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyInclude<ExtArgs> | null
    /**
     * Filter, which AdminReply to fetch.
     */
    where?: AdminReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminReplies to fetch.
     */
    orderBy?: AdminReplyOrderByWithRelationInput | AdminReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminReplies.
     */
    cursor?: AdminReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminReplies.
     */
    distinct?: AdminReplyScalarFieldEnum | AdminReplyScalarFieldEnum[]
  }

  /**
   * AdminReply findMany
   */
  export type AdminReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyInclude<ExtArgs> | null
    /**
     * Filter, which AdminReplies to fetch.
     */
    where?: AdminReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminReplies to fetch.
     */
    orderBy?: AdminReplyOrderByWithRelationInput | AdminReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminReplies.
     */
    cursor?: AdminReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminReplies.
     */
    skip?: number
    distinct?: AdminReplyScalarFieldEnum | AdminReplyScalarFieldEnum[]
  }

  /**
   * AdminReply create
   */
  export type AdminReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminReply.
     */
    data: XOR<AdminReplyCreateInput, AdminReplyUncheckedCreateInput>
  }

  /**
   * AdminReply createMany
   */
  export type AdminReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminReplies.
     */
    data: AdminReplyCreateManyInput | AdminReplyCreateManyInput[]
  }

  /**
   * AdminReply createManyAndReturn
   */
  export type AdminReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * The data used to create many AdminReplies.
     */
    data: AdminReplyCreateManyInput | AdminReplyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminReply update
   */
  export type AdminReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminReply.
     */
    data: XOR<AdminReplyUpdateInput, AdminReplyUncheckedUpdateInput>
    /**
     * Choose, which AdminReply to update.
     */
    where: AdminReplyWhereUniqueInput
  }

  /**
   * AdminReply updateMany
   */
  export type AdminReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminReplies.
     */
    data: XOR<AdminReplyUpdateManyMutationInput, AdminReplyUncheckedUpdateManyInput>
    /**
     * Filter which AdminReplies to update
     */
    where?: AdminReplyWhereInput
    /**
     * Limit how many AdminReplies to update.
     */
    limit?: number
  }

  /**
   * AdminReply updateManyAndReturn
   */
  export type AdminReplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * The data used to update AdminReplies.
     */
    data: XOR<AdminReplyUpdateManyMutationInput, AdminReplyUncheckedUpdateManyInput>
    /**
     * Filter which AdminReplies to update
     */
    where?: AdminReplyWhereInput
    /**
     * Limit how many AdminReplies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminReply upsert
   */
  export type AdminReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminReply to update in case it exists.
     */
    where: AdminReplyWhereUniqueInput
    /**
     * In case the AdminReply found by the `where` argument doesn't exist, create a new AdminReply with this data.
     */
    create: XOR<AdminReplyCreateInput, AdminReplyUncheckedCreateInput>
    /**
     * In case the AdminReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminReplyUpdateInput, AdminReplyUncheckedUpdateInput>
  }

  /**
   * AdminReply delete
   */
  export type AdminReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyInclude<ExtArgs> | null
    /**
     * Filter which AdminReply to delete.
     */
    where: AdminReplyWhereUniqueInput
  }

  /**
   * AdminReply deleteMany
   */
  export type AdminReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminReplies to delete
     */
    where?: AdminReplyWhereInput
    /**
     * Limit how many AdminReplies to delete.
     */
    limit?: number
  }

  /**
   * AdminReply without action
   */
  export type AdminReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminReply
     */
    select?: AdminReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminReply
     */
    omit?: AdminReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminReplyInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    numSongs: number | null
    numStems: number | null
  }

  export type OrderSumAggregateOutputType = {
    numSongs: number | null
    numStems: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    publicId: string | null
    customerName: string | null
    customerEmail: string | null
    serviceType: string | null
    genre: string | null
    message: string | null
    numSongs: number | null
    songLength: string | null
    numStems: number | null
    status: string | null
    driveLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    publicId: string | null
    customerName: string | null
    customerEmail: string | null
    serviceType: string | null
    genre: string | null
    message: string | null
    numSongs: number | null
    songLength: string | null
    numStems: number | null
    status: string | null
    driveLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    publicId: number
    customerName: number
    customerEmail: number
    serviceType: number
    genre: number
    message: number
    numSongs: number
    songLength: number
    numStems: number
    status: number
    driveLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    numSongs?: true
    numStems?: true
  }

  export type OrderSumAggregateInputType = {
    numSongs?: true
    numStems?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    publicId?: true
    customerName?: true
    customerEmail?: true
    serviceType?: true
    genre?: true
    message?: true
    numSongs?: true
    songLength?: true
    numStems?: true
    status?: true
    driveLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    publicId?: true
    customerName?: true
    customerEmail?: true
    serviceType?: true
    genre?: true
    message?: true
    numSongs?: true
    songLength?: true
    numStems?: true
    status?: true
    driveLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    publicId?: true
    customerName?: true
    customerEmail?: true
    serviceType?: true
    genre?: true
    message?: true
    numSongs?: true
    songLength?: true
    numStems?: true
    status?: true
    driveLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    publicId: string
    customerName: string
    customerEmail: string
    serviceType: string
    genre: string | null
    message: string | null
    numSongs: number | null
    songLength: string | null
    numStems: number | null
    status: string
    driveLink: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    customerName?: boolean
    customerEmail?: boolean
    serviceType?: boolean
    genre?: boolean
    message?: boolean
    numSongs?: boolean
    songLength?: boolean
    numStems?: boolean
    status?: boolean
    driveLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statusHistory?: boolean | Order$statusHistoryArgs<ExtArgs>
    reviewToken?: boolean | Order$reviewTokenArgs<ExtArgs>
    review?: boolean | Order$reviewArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    customerName?: boolean
    customerEmail?: boolean
    serviceType?: boolean
    genre?: boolean
    message?: boolean
    numSongs?: boolean
    songLength?: boolean
    numStems?: boolean
    status?: boolean
    driveLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    customerName?: boolean
    customerEmail?: boolean
    serviceType?: boolean
    genre?: boolean
    message?: boolean
    numSongs?: boolean
    songLength?: boolean
    numStems?: boolean
    status?: boolean
    driveLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    publicId?: boolean
    customerName?: boolean
    customerEmail?: boolean
    serviceType?: boolean
    genre?: boolean
    message?: boolean
    numSongs?: boolean
    songLength?: boolean
    numStems?: boolean
    status?: boolean
    driveLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicId" | "customerName" | "customerEmail" | "serviceType" | "genre" | "message" | "numSongs" | "songLength" | "numStems" | "status" | "driveLink" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusHistory?: boolean | Order$statusHistoryArgs<ExtArgs>
    reviewToken?: boolean | Order$reviewTokenArgs<ExtArgs>
    review?: boolean | Order$reviewArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      statusHistory: Prisma.$OrderStatusHistoryPayload<ExtArgs>[]
      reviewToken: Prisma.$ReviewTokenPayload<ExtArgs> | null
      review: Prisma.$ReviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicId: string
      customerName: string
      customerEmail: string
      serviceType: string
      genre: string | null
      message: string | null
      numSongs: number | null
      songLength: string | null
      numStems: number | null
      status: string
      driveLink: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    statusHistory<T extends Order$statusHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Order$statusHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewToken<T extends Order$reviewTokenArgs<ExtArgs> = {}>(args?: Subset<T, Order$reviewTokenArgs<ExtArgs>>): Prisma__ReviewTokenClient<$Result.GetResult<Prisma.$ReviewTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    review<T extends Order$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Order$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly publicId: FieldRef<"Order", 'String'>
    readonly customerName: FieldRef<"Order", 'String'>
    readonly customerEmail: FieldRef<"Order", 'String'>
    readonly serviceType: FieldRef<"Order", 'String'>
    readonly genre: FieldRef<"Order", 'String'>
    readonly message: FieldRef<"Order", 'String'>
    readonly numSongs: FieldRef<"Order", 'Int'>
    readonly songLength: FieldRef<"Order", 'String'>
    readonly numStems: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'String'>
    readonly driveLink: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.statusHistory
   */
  export type Order$statusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryInclude<ExtArgs> | null
    where?: OrderStatusHistoryWhereInput
    orderBy?: OrderStatusHistoryOrderByWithRelationInput | OrderStatusHistoryOrderByWithRelationInput[]
    cursor?: OrderStatusHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderStatusHistoryScalarFieldEnum | OrderStatusHistoryScalarFieldEnum[]
  }

  /**
   * Order.reviewToken
   */
  export type Order$reviewTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenInclude<ExtArgs> | null
    where?: ReviewTokenWhereInput
  }

  /**
   * Order.review
   */
  export type Order$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderStatusHistory
   */

  export type AggregateOrderStatusHistory = {
    _count: OrderStatusHistoryCountAggregateOutputType | null
    _min: OrderStatusHistoryMinAggregateOutputType | null
    _max: OrderStatusHistoryMaxAggregateOutputType | null
  }

  export type OrderStatusHistoryMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    fromStatus: string | null
    toStatus: string | null
    changedBy: string | null
    message: string | null
    createdAt: Date | null
  }

  export type OrderStatusHistoryMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    fromStatus: string | null
    toStatus: string | null
    changedBy: string | null
    message: string | null
    createdAt: Date | null
  }

  export type OrderStatusHistoryCountAggregateOutputType = {
    id: number
    orderId: number
    fromStatus: number
    toStatus: number
    changedBy: number
    message: number
    createdAt: number
    _all: number
  }


  export type OrderStatusHistoryMinAggregateInputType = {
    id?: true
    orderId?: true
    fromStatus?: true
    toStatus?: true
    changedBy?: true
    message?: true
    createdAt?: true
  }

  export type OrderStatusHistoryMaxAggregateInputType = {
    id?: true
    orderId?: true
    fromStatus?: true
    toStatus?: true
    changedBy?: true
    message?: true
    createdAt?: true
  }

  export type OrderStatusHistoryCountAggregateInputType = {
    id?: true
    orderId?: true
    fromStatus?: true
    toStatus?: true
    changedBy?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type OrderStatusHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStatusHistory to aggregate.
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatusHistories to fetch.
     */
    orderBy?: OrderStatusHistoryOrderByWithRelationInput | OrderStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderStatusHistories
    **/
    _count?: true | OrderStatusHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderStatusHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderStatusHistoryMaxAggregateInputType
  }

  export type GetOrderStatusHistoryAggregateType<T extends OrderStatusHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderStatusHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderStatusHistory[P]>
      : GetScalarType<T[P], AggregateOrderStatusHistory[P]>
  }




  export type OrderStatusHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderStatusHistoryWhereInput
    orderBy?: OrderStatusHistoryOrderByWithAggregationInput | OrderStatusHistoryOrderByWithAggregationInput[]
    by: OrderStatusHistoryScalarFieldEnum[] | OrderStatusHistoryScalarFieldEnum
    having?: OrderStatusHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderStatusHistoryCountAggregateInputType | true
    _min?: OrderStatusHistoryMinAggregateInputType
    _max?: OrderStatusHistoryMaxAggregateInputType
  }

  export type OrderStatusHistoryGroupByOutputType = {
    id: string
    orderId: string
    fromStatus: string
    toStatus: string
    changedBy: string
    message: string | null
    createdAt: Date
    _count: OrderStatusHistoryCountAggregateOutputType | null
    _min: OrderStatusHistoryMinAggregateOutputType | null
    _max: OrderStatusHistoryMaxAggregateOutputType | null
  }

  type GetOrderStatusHistoryGroupByPayload<T extends OrderStatusHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderStatusHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderStatusHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderStatusHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], OrderStatusHistoryGroupByOutputType[P]>
        }
      >
    >


  export type OrderStatusHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    message?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderStatusHistory"]>

  export type OrderStatusHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    message?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderStatusHistory"]>

  export type OrderStatusHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    message?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderStatusHistory"]>

  export type OrderStatusHistorySelectScalar = {
    id?: boolean
    orderId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type OrderStatusHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "fromStatus" | "toStatus" | "changedBy" | "message" | "createdAt", ExtArgs["result"]["orderStatusHistory"]>
  export type OrderStatusHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderStatusHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderStatusHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderStatusHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderStatusHistory"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      fromStatus: string
      toStatus: string
      changedBy: string
      message: string | null
      createdAt: Date
    }, ExtArgs["result"]["orderStatusHistory"]>
    composites: {}
  }

  type OrderStatusHistoryGetPayload<S extends boolean | null | undefined | OrderStatusHistoryDefaultArgs> = $Result.GetResult<Prisma.$OrderStatusHistoryPayload, S>

  type OrderStatusHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderStatusHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderStatusHistoryCountAggregateInputType | true
    }

  export interface OrderStatusHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderStatusHistory'], meta: { name: 'OrderStatusHistory' } }
    /**
     * Find zero or one OrderStatusHistory that matches the filter.
     * @param {OrderStatusHistoryFindUniqueArgs} args - Arguments to find a OrderStatusHistory
     * @example
     * // Get one OrderStatusHistory
     * const orderStatusHistory = await prisma.orderStatusHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderStatusHistoryFindUniqueArgs>(args: SelectSubset<T, OrderStatusHistoryFindUniqueArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderStatusHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderStatusHistoryFindUniqueOrThrowArgs} args - Arguments to find a OrderStatusHistory
     * @example
     * // Get one OrderStatusHistory
     * const orderStatusHistory = await prisma.orderStatusHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderStatusHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderStatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStatusHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryFindFirstArgs} args - Arguments to find a OrderStatusHistory
     * @example
     * // Get one OrderStatusHistory
     * const orderStatusHistory = await prisma.orderStatusHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderStatusHistoryFindFirstArgs>(args?: SelectSubset<T, OrderStatusHistoryFindFirstArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStatusHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryFindFirstOrThrowArgs} args - Arguments to find a OrderStatusHistory
     * @example
     * // Get one OrderStatusHistory
     * const orderStatusHistory = await prisma.orderStatusHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderStatusHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderStatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderStatusHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderStatusHistories
     * const orderStatusHistories = await prisma.orderStatusHistory.findMany()
     * 
     * // Get first 10 OrderStatusHistories
     * const orderStatusHistories = await prisma.orderStatusHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderStatusHistoryWithIdOnly = await prisma.orderStatusHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderStatusHistoryFindManyArgs>(args?: SelectSubset<T, OrderStatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderStatusHistory.
     * @param {OrderStatusHistoryCreateArgs} args - Arguments to create a OrderStatusHistory.
     * @example
     * // Create one OrderStatusHistory
     * const OrderStatusHistory = await prisma.orderStatusHistory.create({
     *   data: {
     *     // ... data to create a OrderStatusHistory
     *   }
     * })
     * 
     */
    create<T extends OrderStatusHistoryCreateArgs>(args: SelectSubset<T, OrderStatusHistoryCreateArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderStatusHistories.
     * @param {OrderStatusHistoryCreateManyArgs} args - Arguments to create many OrderStatusHistories.
     * @example
     * // Create many OrderStatusHistories
     * const orderStatusHistory = await prisma.orderStatusHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderStatusHistoryCreateManyArgs>(args?: SelectSubset<T, OrderStatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderStatusHistories and returns the data saved in the database.
     * @param {OrderStatusHistoryCreateManyAndReturnArgs} args - Arguments to create many OrderStatusHistories.
     * @example
     * // Create many OrderStatusHistories
     * const orderStatusHistory = await prisma.orderStatusHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderStatusHistories and only return the `id`
     * const orderStatusHistoryWithIdOnly = await prisma.orderStatusHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderStatusHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderStatusHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderStatusHistory.
     * @param {OrderStatusHistoryDeleteArgs} args - Arguments to delete one OrderStatusHistory.
     * @example
     * // Delete one OrderStatusHistory
     * const OrderStatusHistory = await prisma.orderStatusHistory.delete({
     *   where: {
     *     // ... filter to delete one OrderStatusHistory
     *   }
     * })
     * 
     */
    delete<T extends OrderStatusHistoryDeleteArgs>(args: SelectSubset<T, OrderStatusHistoryDeleteArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderStatusHistory.
     * @param {OrderStatusHistoryUpdateArgs} args - Arguments to update one OrderStatusHistory.
     * @example
     * // Update one OrderStatusHistory
     * const orderStatusHistory = await prisma.orderStatusHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderStatusHistoryUpdateArgs>(args: SelectSubset<T, OrderStatusHistoryUpdateArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderStatusHistories.
     * @param {OrderStatusHistoryDeleteManyArgs} args - Arguments to filter OrderStatusHistories to delete.
     * @example
     * // Delete a few OrderStatusHistories
     * const { count } = await prisma.orderStatusHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderStatusHistoryDeleteManyArgs>(args?: SelectSubset<T, OrderStatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderStatusHistories
     * const orderStatusHistory = await prisma.orderStatusHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderStatusHistoryUpdateManyArgs>(args: SelectSubset<T, OrderStatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderStatusHistories and returns the data updated in the database.
     * @param {OrderStatusHistoryUpdateManyAndReturnArgs} args - Arguments to update many OrderStatusHistories.
     * @example
     * // Update many OrderStatusHistories
     * const orderStatusHistory = await prisma.orderStatusHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderStatusHistories and only return the `id`
     * const orderStatusHistoryWithIdOnly = await prisma.orderStatusHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderStatusHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderStatusHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderStatusHistory.
     * @param {OrderStatusHistoryUpsertArgs} args - Arguments to update or create a OrderStatusHistory.
     * @example
     * // Update or create a OrderStatusHistory
     * const orderStatusHistory = await prisma.orderStatusHistory.upsert({
     *   create: {
     *     // ... data to create a OrderStatusHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderStatusHistory we want to update
     *   }
     * })
     */
    upsert<T extends OrderStatusHistoryUpsertArgs>(args: SelectSubset<T, OrderStatusHistoryUpsertArgs<ExtArgs>>): Prisma__OrderStatusHistoryClient<$Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryCountArgs} args - Arguments to filter OrderStatusHistories to count.
     * @example
     * // Count the number of OrderStatusHistories
     * const count = await prisma.orderStatusHistory.count({
     *   where: {
     *     // ... the filter for the OrderStatusHistories we want to count
     *   }
     * })
    **/
    count<T extends OrderStatusHistoryCountArgs>(
      args?: Subset<T, OrderStatusHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderStatusHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderStatusHistoryAggregateArgs>(args: Subset<T, OrderStatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetOrderStatusHistoryAggregateType<T>>

    /**
     * Group by OrderStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusHistoryGroupByArgs} args - Group by arguments.
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
      T extends OrderStatusHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderStatusHistoryGroupByArgs['orderBy'] }
        : { orderBy?: OrderStatusHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderStatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderStatusHistory model
   */
  readonly fields: OrderStatusHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderStatusHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderStatusHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderStatusHistory model
   */
  interface OrderStatusHistoryFieldRefs {
    readonly id: FieldRef<"OrderStatusHistory", 'String'>
    readonly orderId: FieldRef<"OrderStatusHistory", 'String'>
    readonly fromStatus: FieldRef<"OrderStatusHistory", 'String'>
    readonly toStatus: FieldRef<"OrderStatusHistory", 'String'>
    readonly changedBy: FieldRef<"OrderStatusHistory", 'String'>
    readonly message: FieldRef<"OrderStatusHistory", 'String'>
    readonly createdAt: FieldRef<"OrderStatusHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderStatusHistory findUnique
   */
  export type OrderStatusHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatusHistory to fetch.
     */
    where: OrderStatusHistoryWhereUniqueInput
  }

  /**
   * OrderStatusHistory findUniqueOrThrow
   */
  export type OrderStatusHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatusHistory to fetch.
     */
    where: OrderStatusHistoryWhereUniqueInput
  }

  /**
   * OrderStatusHistory findFirst
   */
  export type OrderStatusHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatusHistory to fetch.
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatusHistories to fetch.
     */
    orderBy?: OrderStatusHistoryOrderByWithRelationInput | OrderStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStatusHistories.
     */
    cursor?: OrderStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatusHistories.
     */
    distinct?: OrderStatusHistoryScalarFieldEnum | OrderStatusHistoryScalarFieldEnum[]
  }

  /**
   * OrderStatusHistory findFirstOrThrow
   */
  export type OrderStatusHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatusHistory to fetch.
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatusHistories to fetch.
     */
    orderBy?: OrderStatusHistoryOrderByWithRelationInput | OrderStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStatusHistories.
     */
    cursor?: OrderStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatusHistories.
     */
    distinct?: OrderStatusHistoryScalarFieldEnum | OrderStatusHistoryScalarFieldEnum[]
  }

  /**
   * OrderStatusHistory findMany
   */
  export type OrderStatusHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatusHistories to fetch.
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatusHistories to fetch.
     */
    orderBy?: OrderStatusHistoryOrderByWithRelationInput | OrderStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderStatusHistories.
     */
    cursor?: OrderStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatusHistories.
     */
    skip?: number
    distinct?: OrderStatusHistoryScalarFieldEnum | OrderStatusHistoryScalarFieldEnum[]
  }

  /**
   * OrderStatusHistory create
   */
  export type OrderStatusHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderStatusHistory.
     */
    data: XOR<OrderStatusHistoryCreateInput, OrderStatusHistoryUncheckedCreateInput>
  }

  /**
   * OrderStatusHistory createMany
   */
  export type OrderStatusHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderStatusHistories.
     */
    data: OrderStatusHistoryCreateManyInput | OrderStatusHistoryCreateManyInput[]
  }

  /**
   * OrderStatusHistory createManyAndReturn
   */
  export type OrderStatusHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many OrderStatusHistories.
     */
    data: OrderStatusHistoryCreateManyInput | OrderStatusHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderStatusHistory update
   */
  export type OrderStatusHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderStatusHistory.
     */
    data: XOR<OrderStatusHistoryUpdateInput, OrderStatusHistoryUncheckedUpdateInput>
    /**
     * Choose, which OrderStatusHistory to update.
     */
    where: OrderStatusHistoryWhereUniqueInput
  }

  /**
   * OrderStatusHistory updateMany
   */
  export type OrderStatusHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderStatusHistories.
     */
    data: XOR<OrderStatusHistoryUpdateManyMutationInput, OrderStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which OrderStatusHistories to update
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * Limit how many OrderStatusHistories to update.
     */
    limit?: number
  }

  /**
   * OrderStatusHistory updateManyAndReturn
   */
  export type OrderStatusHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * The data used to update OrderStatusHistories.
     */
    data: XOR<OrderStatusHistoryUpdateManyMutationInput, OrderStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which OrderStatusHistories to update
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * Limit how many OrderStatusHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderStatusHistory upsert
   */
  export type OrderStatusHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderStatusHistory to update in case it exists.
     */
    where: OrderStatusHistoryWhereUniqueInput
    /**
     * In case the OrderStatusHistory found by the `where` argument doesn't exist, create a new OrderStatusHistory with this data.
     */
    create: XOR<OrderStatusHistoryCreateInput, OrderStatusHistoryUncheckedCreateInput>
    /**
     * In case the OrderStatusHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderStatusHistoryUpdateInput, OrderStatusHistoryUncheckedUpdateInput>
  }

  /**
   * OrderStatusHistory delete
   */
  export type OrderStatusHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter which OrderStatusHistory to delete.
     */
    where: OrderStatusHistoryWhereUniqueInput
  }

  /**
   * OrderStatusHistory deleteMany
   */
  export type OrderStatusHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStatusHistories to delete
     */
    where?: OrderStatusHistoryWhereInput
    /**
     * Limit how many OrderStatusHistories to delete.
     */
    limit?: number
  }

  /**
   * OrderStatusHistory without action
   */
  export type OrderStatusHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: OrderStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: OrderStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ReviewToken
   */

  export type AggregateReviewToken = {
    _count: ReviewTokenCountAggregateOutputType | null
    _min: ReviewTokenMinAggregateOutputType | null
    _max: ReviewTokenMaxAggregateOutputType | null
  }

  export type ReviewTokenMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type ReviewTokenMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type ReviewTokenCountAggregateOutputType = {
    id: number
    orderId: number
    tokenHash: number
    expiresAt: number
    usedAt: number
    createdAt: number
    _all: number
  }


  export type ReviewTokenMinAggregateInputType = {
    id?: true
    orderId?: true
    tokenHash?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type ReviewTokenMaxAggregateInputType = {
    id?: true
    orderId?: true
    tokenHash?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type ReviewTokenCountAggregateInputType = {
    id?: true
    orderId?: true
    tokenHash?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewToken to aggregate.
     */
    where?: ReviewTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewTokens to fetch.
     */
    orderBy?: ReviewTokenOrderByWithRelationInput | ReviewTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewTokens
    **/
    _count?: true | ReviewTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewTokenMaxAggregateInputType
  }

  export type GetReviewTokenAggregateType<T extends ReviewTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewToken[P]>
      : GetScalarType<T[P], AggregateReviewToken[P]>
  }




  export type ReviewTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewTokenWhereInput
    orderBy?: ReviewTokenOrderByWithAggregationInput | ReviewTokenOrderByWithAggregationInput[]
    by: ReviewTokenScalarFieldEnum[] | ReviewTokenScalarFieldEnum
    having?: ReviewTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewTokenCountAggregateInputType | true
    _min?: ReviewTokenMinAggregateInputType
    _max?: ReviewTokenMaxAggregateInputType
  }

  export type ReviewTokenGroupByOutputType = {
    id: string
    orderId: string
    tokenHash: string
    expiresAt: Date
    usedAt: Date | null
    createdAt: Date
    _count: ReviewTokenCountAggregateOutputType | null
    _min: ReviewTokenMinAggregateOutputType | null
    _max: ReviewTokenMaxAggregateOutputType | null
  }

  type GetReviewTokenGroupByPayload<T extends ReviewTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewTokenGroupByOutputType[P]>
        }
      >
    >


  export type ReviewTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewToken"]>

  export type ReviewTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewToken"]>

  export type ReviewTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewToken"]>

  export type ReviewTokenSelectScalar = {
    id?: boolean
    orderId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
  }

  export type ReviewTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "tokenHash" | "expiresAt" | "usedAt" | "createdAt", ExtArgs["result"]["reviewToken"]>
  export type ReviewTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type ReviewTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type ReviewTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $ReviewTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewToken"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      tokenHash: string
      expiresAt: Date
      usedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["reviewToken"]>
    composites: {}
  }

  type ReviewTokenGetPayload<S extends boolean | null | undefined | ReviewTokenDefaultArgs> = $Result.GetResult<Prisma.$ReviewTokenPayload, S>

  type ReviewTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewTokenCountAggregateInputType | true
    }

  export interface ReviewTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewToken'], meta: { name: 'ReviewToken' } }
    /**
     * Find zero or one ReviewToken that matches the filter.
     * @param {ReviewTokenFindUniqueArgs} args - Arguments to find a ReviewToken
     * @example
     * // Get one ReviewToken
     * const reviewToken = await prisma.reviewToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewTokenFindUniqueArgs>(args: SelectSubset<T, ReviewTokenFindUniqueArgs<ExtArgs>>): Prisma__ReviewTokenClient<$Result.GetResult<Prisma.$ReviewTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewTokenFindUniqueOrThrowArgs} args - Arguments to find a ReviewToken
     * @example
     * // Get one ReviewToken
     * const reviewToken = await prisma.reviewToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewTokenClient<$Result.GetResult<Prisma.$ReviewTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewTokenFindFirstArgs} args - Arguments to find a ReviewToken
     * @example
     * // Get one ReviewToken
     * const reviewToken = await prisma.reviewToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewTokenFindFirstArgs>(args?: SelectSubset<T, ReviewTokenFindFirstArgs<ExtArgs>>): Prisma__ReviewTokenClient<$Result.GetResult<Prisma.$ReviewTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewTokenFindFirstOrThrowArgs} args - Arguments to find a ReviewToken
     * @example
     * // Get one ReviewToken
     * const reviewToken = await prisma.reviewToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewTokenClient<$Result.GetResult<Prisma.$ReviewTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewTokens
     * const reviewTokens = await prisma.reviewToken.findMany()
     * 
     * // Get first 10 ReviewTokens
     * const reviewTokens = await prisma.reviewToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewTokenWithIdOnly = await prisma.reviewToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewTokenFindManyArgs>(args?: SelectSubset<T, ReviewTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewToken.
     * @param {ReviewTokenCreateArgs} args - Arguments to create a ReviewToken.
     * @example
     * // Create one ReviewToken
     * const ReviewToken = await prisma.reviewToken.create({
     *   data: {
     *     // ... data to create a ReviewToken
     *   }
     * })
     * 
     */
    create<T extends ReviewTokenCreateArgs>(args: SelectSubset<T, ReviewTokenCreateArgs<ExtArgs>>): Prisma__ReviewTokenClient<$Result.GetResult<Prisma.$ReviewTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewTokens.
     * @param {ReviewTokenCreateManyArgs} args - Arguments to create many ReviewTokens.
     * @example
     * // Create many ReviewTokens
     * const reviewToken = await prisma.reviewToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewTokenCreateManyArgs>(args?: SelectSubset<T, ReviewTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewTokens and returns the data saved in the database.
     * @param {ReviewTokenCreateManyAndReturnArgs} args - Arguments to create many ReviewTokens.
     * @example
     * // Create many ReviewTokens
     * const reviewToken = await prisma.reviewToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewTokens and only return the `id`
     * const reviewTokenWithIdOnly = await prisma.reviewToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewToken.
     * @param {ReviewTokenDeleteArgs} args - Arguments to delete one ReviewToken.
     * @example
     * // Delete one ReviewToken
     * const ReviewToken = await prisma.reviewToken.delete({
     *   where: {
     *     // ... filter to delete one ReviewToken
     *   }
     * })
     * 
     */
    delete<T extends ReviewTokenDeleteArgs>(args: SelectSubset<T, ReviewTokenDeleteArgs<ExtArgs>>): Prisma__ReviewTokenClient<$Result.GetResult<Prisma.$ReviewTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewToken.
     * @param {ReviewTokenUpdateArgs} args - Arguments to update one ReviewToken.
     * @example
     * // Update one ReviewToken
     * const reviewToken = await prisma.reviewToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewTokenUpdateArgs>(args: SelectSubset<T, ReviewTokenUpdateArgs<ExtArgs>>): Prisma__ReviewTokenClient<$Result.GetResult<Prisma.$ReviewTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewTokens.
     * @param {ReviewTokenDeleteManyArgs} args - Arguments to filter ReviewTokens to delete.
     * @example
     * // Delete a few ReviewTokens
     * const { count } = await prisma.reviewToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewTokenDeleteManyArgs>(args?: SelectSubset<T, ReviewTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewTokens
     * const reviewToken = await prisma.reviewToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewTokenUpdateManyArgs>(args: SelectSubset<T, ReviewTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewTokens and returns the data updated in the database.
     * @param {ReviewTokenUpdateManyAndReturnArgs} args - Arguments to update many ReviewTokens.
     * @example
     * // Update many ReviewTokens
     * const reviewToken = await prisma.reviewToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewTokens and only return the `id`
     * const reviewTokenWithIdOnly = await prisma.reviewToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewToken.
     * @param {ReviewTokenUpsertArgs} args - Arguments to update or create a ReviewToken.
     * @example
     * // Update or create a ReviewToken
     * const reviewToken = await prisma.reviewToken.upsert({
     *   create: {
     *     // ... data to create a ReviewToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewToken we want to update
     *   }
     * })
     */
    upsert<T extends ReviewTokenUpsertArgs>(args: SelectSubset<T, ReviewTokenUpsertArgs<ExtArgs>>): Prisma__ReviewTokenClient<$Result.GetResult<Prisma.$ReviewTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewTokenCountArgs} args - Arguments to filter ReviewTokens to count.
     * @example
     * // Count the number of ReviewTokens
     * const count = await prisma.reviewToken.count({
     *   where: {
     *     // ... the filter for the ReviewTokens we want to count
     *   }
     * })
    **/
    count<T extends ReviewTokenCountArgs>(
      args?: Subset<T, ReviewTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewTokenAggregateArgs>(args: Subset<T, ReviewTokenAggregateArgs>): Prisma.PrismaPromise<GetReviewTokenAggregateType<T>>

    /**
     * Group by ReviewToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewTokenGroupByArgs} args - Group by arguments.
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
      T extends ReviewTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewTokenGroupByArgs['orderBy'] }
        : { orderBy?: ReviewTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewToken model
   */
  readonly fields: ReviewTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReviewToken model
   */
  interface ReviewTokenFieldRefs {
    readonly id: FieldRef<"ReviewToken", 'String'>
    readonly orderId: FieldRef<"ReviewToken", 'String'>
    readonly tokenHash: FieldRef<"ReviewToken", 'String'>
    readonly expiresAt: FieldRef<"ReviewToken", 'DateTime'>
    readonly usedAt: FieldRef<"ReviewToken", 'DateTime'>
    readonly createdAt: FieldRef<"ReviewToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewToken findUnique
   */
  export type ReviewTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenInclude<ExtArgs> | null
    /**
     * Filter, which ReviewToken to fetch.
     */
    where: ReviewTokenWhereUniqueInput
  }

  /**
   * ReviewToken findUniqueOrThrow
   */
  export type ReviewTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenInclude<ExtArgs> | null
    /**
     * Filter, which ReviewToken to fetch.
     */
    where: ReviewTokenWhereUniqueInput
  }

  /**
   * ReviewToken findFirst
   */
  export type ReviewTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenInclude<ExtArgs> | null
    /**
     * Filter, which ReviewToken to fetch.
     */
    where?: ReviewTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewTokens to fetch.
     */
    orderBy?: ReviewTokenOrderByWithRelationInput | ReviewTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewTokens.
     */
    cursor?: ReviewTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewTokens.
     */
    distinct?: ReviewTokenScalarFieldEnum | ReviewTokenScalarFieldEnum[]
  }

  /**
   * ReviewToken findFirstOrThrow
   */
  export type ReviewTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenInclude<ExtArgs> | null
    /**
     * Filter, which ReviewToken to fetch.
     */
    where?: ReviewTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewTokens to fetch.
     */
    orderBy?: ReviewTokenOrderByWithRelationInput | ReviewTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewTokens.
     */
    cursor?: ReviewTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewTokens.
     */
    distinct?: ReviewTokenScalarFieldEnum | ReviewTokenScalarFieldEnum[]
  }

  /**
   * ReviewToken findMany
   */
  export type ReviewTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenInclude<ExtArgs> | null
    /**
     * Filter, which ReviewTokens to fetch.
     */
    where?: ReviewTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewTokens to fetch.
     */
    orderBy?: ReviewTokenOrderByWithRelationInput | ReviewTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewTokens.
     */
    cursor?: ReviewTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewTokens.
     */
    skip?: number
    distinct?: ReviewTokenScalarFieldEnum | ReviewTokenScalarFieldEnum[]
  }

  /**
   * ReviewToken create
   */
  export type ReviewTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewToken.
     */
    data: XOR<ReviewTokenCreateInput, ReviewTokenUncheckedCreateInput>
  }

  /**
   * ReviewToken createMany
   */
  export type ReviewTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewTokens.
     */
    data: ReviewTokenCreateManyInput | ReviewTokenCreateManyInput[]
  }

  /**
   * ReviewToken createManyAndReturn
   */
  export type ReviewTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewTokens.
     */
    data: ReviewTokenCreateManyInput | ReviewTokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewToken update
   */
  export type ReviewTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewToken.
     */
    data: XOR<ReviewTokenUpdateInput, ReviewTokenUncheckedUpdateInput>
    /**
     * Choose, which ReviewToken to update.
     */
    where: ReviewTokenWhereUniqueInput
  }

  /**
   * ReviewToken updateMany
   */
  export type ReviewTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewTokens.
     */
    data: XOR<ReviewTokenUpdateManyMutationInput, ReviewTokenUncheckedUpdateManyInput>
    /**
     * Filter which ReviewTokens to update
     */
    where?: ReviewTokenWhereInput
    /**
     * Limit how many ReviewTokens to update.
     */
    limit?: number
  }

  /**
   * ReviewToken updateManyAndReturn
   */
  export type ReviewTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * The data used to update ReviewTokens.
     */
    data: XOR<ReviewTokenUpdateManyMutationInput, ReviewTokenUncheckedUpdateManyInput>
    /**
     * Filter which ReviewTokens to update
     */
    where?: ReviewTokenWhereInput
    /**
     * Limit how many ReviewTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewToken upsert
   */
  export type ReviewTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewToken to update in case it exists.
     */
    where: ReviewTokenWhereUniqueInput
    /**
     * In case the ReviewToken found by the `where` argument doesn't exist, create a new ReviewToken with this data.
     */
    create: XOR<ReviewTokenCreateInput, ReviewTokenUncheckedCreateInput>
    /**
     * In case the ReviewToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewTokenUpdateInput, ReviewTokenUncheckedUpdateInput>
  }

  /**
   * ReviewToken delete
   */
  export type ReviewTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenInclude<ExtArgs> | null
    /**
     * Filter which ReviewToken to delete.
     */
    where: ReviewTokenWhereUniqueInput
  }

  /**
   * ReviewToken deleteMany
   */
  export type ReviewTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewTokens to delete
     */
    where?: ReviewTokenWhereInput
    /**
     * Limit how many ReviewTokens to delete.
     */
    limit?: number
  }

  /**
   * ReviewToken without action
   */
  export type ReviewTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewToken
     */
    select?: ReviewTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewToken
     */
    omit?: ReviewTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewTokenInclude<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model SiteSettingVersion
   */

  export type AggregateSiteSettingVersion = {
    _count: SiteSettingVersionCountAggregateOutputType | null
    _avg: SiteSettingVersionAvgAggregateOutputType | null
    _sum: SiteSettingVersionSumAggregateOutputType | null
    _min: SiteSettingVersionMinAggregateOutputType | null
    _max: SiteSettingVersionMaxAggregateOutputType | null
  }

  export type SiteSettingVersionAvgAggregateOutputType = {
    version: number | null
  }

  export type SiteSettingVersionSumAggregateOutputType = {
    version: number | null
  }

  export type SiteSettingVersionMinAggregateOutputType = {
    version: number | null
    payload: string | null
    changedBy: string | null
    createdAt: Date | null
  }

  export type SiteSettingVersionMaxAggregateOutputType = {
    version: number | null
    payload: string | null
    changedBy: string | null
    createdAt: Date | null
  }

  export type SiteSettingVersionCountAggregateOutputType = {
    version: number
    payload: number
    changedBy: number
    createdAt: number
    _all: number
  }


  export type SiteSettingVersionAvgAggregateInputType = {
    version?: true
  }

  export type SiteSettingVersionSumAggregateInputType = {
    version?: true
  }

  export type SiteSettingVersionMinAggregateInputType = {
    version?: true
    payload?: true
    changedBy?: true
    createdAt?: true
  }

  export type SiteSettingVersionMaxAggregateInputType = {
    version?: true
    payload?: true
    changedBy?: true
    createdAt?: true
  }

  export type SiteSettingVersionCountAggregateInputType = {
    version?: true
    payload?: true
    changedBy?: true
    createdAt?: true
    _all?: true
  }

  export type SiteSettingVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettingVersion to aggregate.
     */
    where?: SiteSettingVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettingVersions to fetch.
     */
    orderBy?: SiteSettingVersionOrderByWithRelationInput | SiteSettingVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteSettingVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettingVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettingVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteSettingVersions
    **/
    _count?: true | SiteSettingVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteSettingVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSettingVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteSettingVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteSettingVersionMaxAggregateInputType
  }

  export type GetSiteSettingVersionAggregateType<T extends SiteSettingVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteSettingVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteSettingVersion[P]>
      : GetScalarType<T[P], AggregateSiteSettingVersion[P]>
  }




  export type SiteSettingVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteSettingVersionWhereInput
    orderBy?: SiteSettingVersionOrderByWithAggregationInput | SiteSettingVersionOrderByWithAggregationInput[]
    by: SiteSettingVersionScalarFieldEnum[] | SiteSettingVersionScalarFieldEnum
    having?: SiteSettingVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteSettingVersionCountAggregateInputType | true
    _avg?: SiteSettingVersionAvgAggregateInputType
    _sum?: SiteSettingVersionSumAggregateInputType
    _min?: SiteSettingVersionMinAggregateInputType
    _max?: SiteSettingVersionMaxAggregateInputType
  }

  export type SiteSettingVersionGroupByOutputType = {
    version: number
    payload: string
    changedBy: string
    createdAt: Date
    _count: SiteSettingVersionCountAggregateOutputType | null
    _avg: SiteSettingVersionAvgAggregateOutputType | null
    _sum: SiteSettingVersionSumAggregateOutputType | null
    _min: SiteSettingVersionMinAggregateOutputType | null
    _max: SiteSettingVersionMaxAggregateOutputType | null
  }

  type GetSiteSettingVersionGroupByPayload<T extends SiteSettingVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteSettingVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteSettingVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteSettingVersionGroupByOutputType[P]>
            : GetScalarType<T[P], SiteSettingVersionGroupByOutputType[P]>
        }
      >
    >


  export type SiteSettingVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    payload?: boolean
    changedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["siteSettingVersion"]>

  export type SiteSettingVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    payload?: boolean
    changedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["siteSettingVersion"]>

  export type SiteSettingVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    payload?: boolean
    changedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["siteSettingVersion"]>

  export type SiteSettingVersionSelectScalar = {
    version?: boolean
    payload?: boolean
    changedBy?: boolean
    createdAt?: boolean
  }

  export type SiteSettingVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"version" | "payload" | "changedBy" | "createdAt", ExtArgs["result"]["siteSettingVersion"]>

  export type $SiteSettingVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteSettingVersion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      version: number
      payload: string
      changedBy: string
      createdAt: Date
    }, ExtArgs["result"]["siteSettingVersion"]>
    composites: {}
  }

  type SiteSettingVersionGetPayload<S extends boolean | null | undefined | SiteSettingVersionDefaultArgs> = $Result.GetResult<Prisma.$SiteSettingVersionPayload, S>

  type SiteSettingVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteSettingVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteSettingVersionCountAggregateInputType | true
    }

  export interface SiteSettingVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteSettingVersion'], meta: { name: 'SiteSettingVersion' } }
    /**
     * Find zero or one SiteSettingVersion that matches the filter.
     * @param {SiteSettingVersionFindUniqueArgs} args - Arguments to find a SiteSettingVersion
     * @example
     * // Get one SiteSettingVersion
     * const siteSettingVersion = await prisma.siteSettingVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteSettingVersionFindUniqueArgs>(args: SelectSubset<T, SiteSettingVersionFindUniqueArgs<ExtArgs>>): Prisma__SiteSettingVersionClient<$Result.GetResult<Prisma.$SiteSettingVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteSettingVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteSettingVersionFindUniqueOrThrowArgs} args - Arguments to find a SiteSettingVersion
     * @example
     * // Get one SiteSettingVersion
     * const siteSettingVersion = await prisma.siteSettingVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteSettingVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteSettingVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteSettingVersionClient<$Result.GetResult<Prisma.$SiteSettingVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteSettingVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingVersionFindFirstArgs} args - Arguments to find a SiteSettingVersion
     * @example
     * // Get one SiteSettingVersion
     * const siteSettingVersion = await prisma.siteSettingVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteSettingVersionFindFirstArgs>(args?: SelectSubset<T, SiteSettingVersionFindFirstArgs<ExtArgs>>): Prisma__SiteSettingVersionClient<$Result.GetResult<Prisma.$SiteSettingVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteSettingVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingVersionFindFirstOrThrowArgs} args - Arguments to find a SiteSettingVersion
     * @example
     * // Get one SiteSettingVersion
     * const siteSettingVersion = await prisma.siteSettingVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteSettingVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteSettingVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteSettingVersionClient<$Result.GetResult<Prisma.$SiteSettingVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteSettingVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteSettingVersions
     * const siteSettingVersions = await prisma.siteSettingVersion.findMany()
     * 
     * // Get first 10 SiteSettingVersions
     * const siteSettingVersions = await prisma.siteSettingVersion.findMany({ take: 10 })
     * 
     * // Only select the `version`
     * const siteSettingVersionWithVersionOnly = await prisma.siteSettingVersion.findMany({ select: { version: true } })
     * 
     */
    findMany<T extends SiteSettingVersionFindManyArgs>(args?: SelectSubset<T, SiteSettingVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteSettingVersion.
     * @param {SiteSettingVersionCreateArgs} args - Arguments to create a SiteSettingVersion.
     * @example
     * // Create one SiteSettingVersion
     * const SiteSettingVersion = await prisma.siteSettingVersion.create({
     *   data: {
     *     // ... data to create a SiteSettingVersion
     *   }
     * })
     * 
     */
    create<T extends SiteSettingVersionCreateArgs>(args: SelectSubset<T, SiteSettingVersionCreateArgs<ExtArgs>>): Prisma__SiteSettingVersionClient<$Result.GetResult<Prisma.$SiteSettingVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteSettingVersions.
     * @param {SiteSettingVersionCreateManyArgs} args - Arguments to create many SiteSettingVersions.
     * @example
     * // Create many SiteSettingVersions
     * const siteSettingVersion = await prisma.siteSettingVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteSettingVersionCreateManyArgs>(args?: SelectSubset<T, SiteSettingVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteSettingVersions and returns the data saved in the database.
     * @param {SiteSettingVersionCreateManyAndReturnArgs} args - Arguments to create many SiteSettingVersions.
     * @example
     * // Create many SiteSettingVersions
     * const siteSettingVersion = await prisma.siteSettingVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteSettingVersions and only return the `version`
     * const siteSettingVersionWithVersionOnly = await prisma.siteSettingVersion.createManyAndReturn({
     *   select: { version: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteSettingVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteSettingVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteSettingVersion.
     * @param {SiteSettingVersionDeleteArgs} args - Arguments to delete one SiteSettingVersion.
     * @example
     * // Delete one SiteSettingVersion
     * const SiteSettingVersion = await prisma.siteSettingVersion.delete({
     *   where: {
     *     // ... filter to delete one SiteSettingVersion
     *   }
     * })
     * 
     */
    delete<T extends SiteSettingVersionDeleteArgs>(args: SelectSubset<T, SiteSettingVersionDeleteArgs<ExtArgs>>): Prisma__SiteSettingVersionClient<$Result.GetResult<Prisma.$SiteSettingVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteSettingVersion.
     * @param {SiteSettingVersionUpdateArgs} args - Arguments to update one SiteSettingVersion.
     * @example
     * // Update one SiteSettingVersion
     * const siteSettingVersion = await prisma.siteSettingVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteSettingVersionUpdateArgs>(args: SelectSubset<T, SiteSettingVersionUpdateArgs<ExtArgs>>): Prisma__SiteSettingVersionClient<$Result.GetResult<Prisma.$SiteSettingVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteSettingVersions.
     * @param {SiteSettingVersionDeleteManyArgs} args - Arguments to filter SiteSettingVersions to delete.
     * @example
     * // Delete a few SiteSettingVersions
     * const { count } = await prisma.siteSettingVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteSettingVersionDeleteManyArgs>(args?: SelectSubset<T, SiteSettingVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettingVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteSettingVersions
     * const siteSettingVersion = await prisma.siteSettingVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteSettingVersionUpdateManyArgs>(args: SelectSubset<T, SiteSettingVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettingVersions and returns the data updated in the database.
     * @param {SiteSettingVersionUpdateManyAndReturnArgs} args - Arguments to update many SiteSettingVersions.
     * @example
     * // Update many SiteSettingVersions
     * const siteSettingVersion = await prisma.siteSettingVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteSettingVersions and only return the `version`
     * const siteSettingVersionWithVersionOnly = await prisma.siteSettingVersion.updateManyAndReturn({
     *   select: { version: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteSettingVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteSettingVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteSettingVersion.
     * @param {SiteSettingVersionUpsertArgs} args - Arguments to update or create a SiteSettingVersion.
     * @example
     * // Update or create a SiteSettingVersion
     * const siteSettingVersion = await prisma.siteSettingVersion.upsert({
     *   create: {
     *     // ... data to create a SiteSettingVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteSettingVersion we want to update
     *   }
     * })
     */
    upsert<T extends SiteSettingVersionUpsertArgs>(args: SelectSubset<T, SiteSettingVersionUpsertArgs<ExtArgs>>): Prisma__SiteSettingVersionClient<$Result.GetResult<Prisma.$SiteSettingVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteSettingVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingVersionCountArgs} args - Arguments to filter SiteSettingVersions to count.
     * @example
     * // Count the number of SiteSettingVersions
     * const count = await prisma.siteSettingVersion.count({
     *   where: {
     *     // ... the filter for the SiteSettingVersions we want to count
     *   }
     * })
    **/
    count<T extends SiteSettingVersionCountArgs>(
      args?: Subset<T, SiteSettingVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteSettingVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteSettingVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteSettingVersionAggregateArgs>(args: Subset<T, SiteSettingVersionAggregateArgs>): Prisma.PrismaPromise<GetSiteSettingVersionAggregateType<T>>

    /**
     * Group by SiteSettingVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingVersionGroupByArgs} args - Group by arguments.
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
      T extends SiteSettingVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteSettingVersionGroupByArgs['orderBy'] }
        : { orderBy?: SiteSettingVersionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteSettingVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteSettingVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteSettingVersion model
   */
  readonly fields: SiteSettingVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteSettingVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteSettingVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SiteSettingVersion model
   */
  interface SiteSettingVersionFieldRefs {
    readonly version: FieldRef<"SiteSettingVersion", 'Int'>
    readonly payload: FieldRef<"SiteSettingVersion", 'String'>
    readonly changedBy: FieldRef<"SiteSettingVersion", 'String'>
    readonly createdAt: FieldRef<"SiteSettingVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteSettingVersion findUnique
   */
  export type SiteSettingVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettingVersion
     */
    select?: SiteSettingVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettingVersion
     */
    omit?: SiteSettingVersionOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettingVersion to fetch.
     */
    where: SiteSettingVersionWhereUniqueInput
  }

  /**
   * SiteSettingVersion findUniqueOrThrow
   */
  export type SiteSettingVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettingVersion
     */
    select?: SiteSettingVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettingVersion
     */
    omit?: SiteSettingVersionOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettingVersion to fetch.
     */
    where: SiteSettingVersionWhereUniqueInput
  }

  /**
   * SiteSettingVersion findFirst
   */
  export type SiteSettingVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettingVersion
     */
    select?: SiteSettingVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettingVersion
     */
    omit?: SiteSettingVersionOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettingVersion to fetch.
     */
    where?: SiteSettingVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettingVersions to fetch.
     */
    orderBy?: SiteSettingVersionOrderByWithRelationInput | SiteSettingVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettingVersions.
     */
    cursor?: SiteSettingVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettingVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettingVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettingVersions.
     */
    distinct?: SiteSettingVersionScalarFieldEnum | SiteSettingVersionScalarFieldEnum[]
  }

  /**
   * SiteSettingVersion findFirstOrThrow
   */
  export type SiteSettingVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettingVersion
     */
    select?: SiteSettingVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettingVersion
     */
    omit?: SiteSettingVersionOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettingVersion to fetch.
     */
    where?: SiteSettingVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettingVersions to fetch.
     */
    orderBy?: SiteSettingVersionOrderByWithRelationInput | SiteSettingVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettingVersions.
     */
    cursor?: SiteSettingVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettingVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettingVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettingVersions.
     */
    distinct?: SiteSettingVersionScalarFieldEnum | SiteSettingVersionScalarFieldEnum[]
  }

  /**
   * SiteSettingVersion findMany
   */
  export type SiteSettingVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettingVersion
     */
    select?: SiteSettingVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettingVersion
     */
    omit?: SiteSettingVersionOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettingVersions to fetch.
     */
    where?: SiteSettingVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettingVersions to fetch.
     */
    orderBy?: SiteSettingVersionOrderByWithRelationInput | SiteSettingVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteSettingVersions.
     */
    cursor?: SiteSettingVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettingVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettingVersions.
     */
    skip?: number
    distinct?: SiteSettingVersionScalarFieldEnum | SiteSettingVersionScalarFieldEnum[]
  }

  /**
   * SiteSettingVersion create
   */
  export type SiteSettingVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettingVersion
     */
    select?: SiteSettingVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettingVersion
     */
    omit?: SiteSettingVersionOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteSettingVersion.
     */
    data: XOR<SiteSettingVersionCreateInput, SiteSettingVersionUncheckedCreateInput>
  }

  /**
   * SiteSettingVersion createMany
   */
  export type SiteSettingVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteSettingVersions.
     */
    data: SiteSettingVersionCreateManyInput | SiteSettingVersionCreateManyInput[]
  }

  /**
   * SiteSettingVersion createManyAndReturn
   */
  export type SiteSettingVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettingVersion
     */
    select?: SiteSettingVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettingVersion
     */
    omit?: SiteSettingVersionOmit<ExtArgs> | null
    /**
     * The data used to create many SiteSettingVersions.
     */
    data: SiteSettingVersionCreateManyInput | SiteSettingVersionCreateManyInput[]
  }

  /**
   * SiteSettingVersion update
   */
  export type SiteSettingVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettingVersion
     */
    select?: SiteSettingVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettingVersion
     */
    omit?: SiteSettingVersionOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteSettingVersion.
     */
    data: XOR<SiteSettingVersionUpdateInput, SiteSettingVersionUncheckedUpdateInput>
    /**
     * Choose, which SiteSettingVersion to update.
     */
    where: SiteSettingVersionWhereUniqueInput
  }

  /**
   * SiteSettingVersion updateMany
   */
  export type SiteSettingVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteSettingVersions.
     */
    data: XOR<SiteSettingVersionUpdateManyMutationInput, SiteSettingVersionUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettingVersions to update
     */
    where?: SiteSettingVersionWhereInput
    /**
     * Limit how many SiteSettingVersions to update.
     */
    limit?: number
  }

  /**
   * SiteSettingVersion updateManyAndReturn
   */
  export type SiteSettingVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettingVersion
     */
    select?: SiteSettingVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettingVersion
     */
    omit?: SiteSettingVersionOmit<ExtArgs> | null
    /**
     * The data used to update SiteSettingVersions.
     */
    data: XOR<SiteSettingVersionUpdateManyMutationInput, SiteSettingVersionUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettingVersions to update
     */
    where?: SiteSettingVersionWhereInput
    /**
     * Limit how many SiteSettingVersions to update.
     */
    limit?: number
  }

  /**
   * SiteSettingVersion upsert
   */
  export type SiteSettingVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettingVersion
     */
    select?: SiteSettingVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettingVersion
     */
    omit?: SiteSettingVersionOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteSettingVersion to update in case it exists.
     */
    where: SiteSettingVersionWhereUniqueInput
    /**
     * In case the SiteSettingVersion found by the `where` argument doesn't exist, create a new SiteSettingVersion with this data.
     */
    create: XOR<SiteSettingVersionCreateInput, SiteSettingVersionUncheckedCreateInput>
    /**
     * In case the SiteSettingVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteSettingVersionUpdateInput, SiteSettingVersionUncheckedUpdateInput>
  }

  /**
   * SiteSettingVersion delete
   */
  export type SiteSettingVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettingVersion
     */
    select?: SiteSettingVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettingVersion
     */
    omit?: SiteSettingVersionOmit<ExtArgs> | null
    /**
     * Filter which SiteSettingVersion to delete.
     */
    where: SiteSettingVersionWhereUniqueInput
  }

  /**
   * SiteSettingVersion deleteMany
   */
  export type SiteSettingVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettingVersions to delete
     */
    where?: SiteSettingVersionWhereInput
    /**
     * Limit how many SiteSettingVersions to delete.
     */
    limit?: number
  }

  /**
   * SiteSettingVersion without action
   */
  export type SiteSettingVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettingVersion
     */
    select?: SiteSettingVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettingVersion
     */
    omit?: SiteSettingVersionOmit<ExtArgs> | null
  }


  /**
   * Model WorkItem
   */

  export type AggregateWorkItem = {
    _count: WorkItemCountAggregateOutputType | null
    _avg: WorkItemAvgAggregateOutputType | null
    _sum: WorkItemSumAggregateOutputType | null
    _min: WorkItemMinAggregateOutputType | null
    _max: WorkItemMaxAggregateOutputType | null
  }

  export type WorkItemAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type WorkItemSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type WorkItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    artist: string | null
    role: string | null
    embedUrl: string | null
    provider: string | null
    status: string | null
    orderIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    artist: string | null
    role: string | null
    embedUrl: string | null
    provider: string | null
    status: string | null
    orderIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkItemCountAggregateOutputType = {
    id: number
    title: number
    artist: number
    role: number
    embedUrl: number
    provider: number
    status: number
    orderIndex: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkItemAvgAggregateInputType = {
    orderIndex?: true
  }

  export type WorkItemSumAggregateInputType = {
    orderIndex?: true
  }

  export type WorkItemMinAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    role?: true
    embedUrl?: true
    provider?: true
    status?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkItemMaxAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    role?: true
    embedUrl?: true
    provider?: true
    status?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkItemCountAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    role?: true
    embedUrl?: true
    provider?: true
    status?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkItem to aggregate.
     */
    where?: WorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItems to fetch.
     */
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkItems
    **/
    _count?: true | WorkItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkItemMaxAggregateInputType
  }

  export type GetWorkItemAggregateType<T extends WorkItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkItem[P]>
      : GetScalarType<T[P], AggregateWorkItem[P]>
  }




  export type WorkItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemWhereInput
    orderBy?: WorkItemOrderByWithAggregationInput | WorkItemOrderByWithAggregationInput[]
    by: WorkItemScalarFieldEnum[] | WorkItemScalarFieldEnum
    having?: WorkItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkItemCountAggregateInputType | true
    _avg?: WorkItemAvgAggregateInputType
    _sum?: WorkItemSumAggregateInputType
    _min?: WorkItemMinAggregateInputType
    _max?: WorkItemMaxAggregateInputType
  }

  export type WorkItemGroupByOutputType = {
    id: string
    title: string
    artist: string | null
    role: string
    embedUrl: string
    provider: string
    status: string
    orderIndex: number
    createdAt: Date
    updatedAt: Date
    _count: WorkItemCountAggregateOutputType | null
    _avg: WorkItemAvgAggregateOutputType | null
    _sum: WorkItemSumAggregateOutputType | null
    _min: WorkItemMinAggregateOutputType | null
    _max: WorkItemMaxAggregateOutputType | null
  }

  type GetWorkItemGroupByPayload<T extends WorkItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkItemGroupByOutputType[P]>
            : GetScalarType<T[P], WorkItemGroupByOutputType[P]>
        }
      >
    >


  export type WorkItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    role?: boolean
    embedUrl?: boolean
    provider?: boolean
    status?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workItem"]>

  export type WorkItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    role?: boolean
    embedUrl?: boolean
    provider?: boolean
    status?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workItem"]>

  export type WorkItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    role?: boolean
    embedUrl?: boolean
    provider?: boolean
    status?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workItem"]>

  export type WorkItemSelectScalar = {
    id?: boolean
    title?: boolean
    artist?: boolean
    role?: boolean
    embedUrl?: boolean
    provider?: boolean
    status?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "artist" | "role" | "embedUrl" | "provider" | "status" | "orderIndex" | "createdAt" | "updatedAt", ExtArgs["result"]["workItem"]>

  export type $WorkItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      artist: string | null
      role: string
      embedUrl: string
      provider: string
      status: string
      orderIndex: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workItem"]>
    composites: {}
  }

  type WorkItemGetPayload<S extends boolean | null | undefined | WorkItemDefaultArgs> = $Result.GetResult<Prisma.$WorkItemPayload, S>

  type WorkItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkItemCountAggregateInputType | true
    }

  export interface WorkItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkItem'], meta: { name: 'WorkItem' } }
    /**
     * Find zero or one WorkItem that matches the filter.
     * @param {WorkItemFindUniqueArgs} args - Arguments to find a WorkItem
     * @example
     * // Get one WorkItem
     * const workItem = await prisma.workItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkItemFindUniqueArgs>(args: SelectSubset<T, WorkItemFindUniqueArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkItemFindUniqueOrThrowArgs} args - Arguments to find a WorkItem
     * @example
     * // Get one WorkItem
     * const workItem = await prisma.workItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemFindFirstArgs} args - Arguments to find a WorkItem
     * @example
     * // Get one WorkItem
     * const workItem = await prisma.workItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkItemFindFirstArgs>(args?: SelectSubset<T, WorkItemFindFirstArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemFindFirstOrThrowArgs} args - Arguments to find a WorkItem
     * @example
     * // Get one WorkItem
     * const workItem = await prisma.workItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkItems
     * const workItems = await prisma.workItem.findMany()
     * 
     * // Get first 10 WorkItems
     * const workItems = await prisma.workItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workItemWithIdOnly = await prisma.workItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkItemFindManyArgs>(args?: SelectSubset<T, WorkItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkItem.
     * @param {WorkItemCreateArgs} args - Arguments to create a WorkItem.
     * @example
     * // Create one WorkItem
     * const WorkItem = await prisma.workItem.create({
     *   data: {
     *     // ... data to create a WorkItem
     *   }
     * })
     * 
     */
    create<T extends WorkItemCreateArgs>(args: SelectSubset<T, WorkItemCreateArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkItems.
     * @param {WorkItemCreateManyArgs} args - Arguments to create many WorkItems.
     * @example
     * // Create many WorkItems
     * const workItem = await prisma.workItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkItemCreateManyArgs>(args?: SelectSubset<T, WorkItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkItems and returns the data saved in the database.
     * @param {WorkItemCreateManyAndReturnArgs} args - Arguments to create many WorkItems.
     * @example
     * // Create many WorkItems
     * const workItem = await prisma.workItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkItems and only return the `id`
     * const workItemWithIdOnly = await prisma.workItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkItem.
     * @param {WorkItemDeleteArgs} args - Arguments to delete one WorkItem.
     * @example
     * // Delete one WorkItem
     * const WorkItem = await prisma.workItem.delete({
     *   where: {
     *     // ... filter to delete one WorkItem
     *   }
     * })
     * 
     */
    delete<T extends WorkItemDeleteArgs>(args: SelectSubset<T, WorkItemDeleteArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkItem.
     * @param {WorkItemUpdateArgs} args - Arguments to update one WorkItem.
     * @example
     * // Update one WorkItem
     * const workItem = await prisma.workItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkItemUpdateArgs>(args: SelectSubset<T, WorkItemUpdateArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkItems.
     * @param {WorkItemDeleteManyArgs} args - Arguments to filter WorkItems to delete.
     * @example
     * // Delete a few WorkItems
     * const { count } = await prisma.workItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkItemDeleteManyArgs>(args?: SelectSubset<T, WorkItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkItems
     * const workItem = await prisma.workItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkItemUpdateManyArgs>(args: SelectSubset<T, WorkItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkItems and returns the data updated in the database.
     * @param {WorkItemUpdateManyAndReturnArgs} args - Arguments to update many WorkItems.
     * @example
     * // Update many WorkItems
     * const workItem = await prisma.workItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkItems and only return the `id`
     * const workItemWithIdOnly = await prisma.workItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkItem.
     * @param {WorkItemUpsertArgs} args - Arguments to update or create a WorkItem.
     * @example
     * // Update or create a WorkItem
     * const workItem = await prisma.workItem.upsert({
     *   create: {
     *     // ... data to create a WorkItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkItem we want to update
     *   }
     * })
     */
    upsert<T extends WorkItemUpsertArgs>(args: SelectSubset<T, WorkItemUpsertArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemCountArgs} args - Arguments to filter WorkItems to count.
     * @example
     * // Count the number of WorkItems
     * const count = await prisma.workItem.count({
     *   where: {
     *     // ... the filter for the WorkItems we want to count
     *   }
     * })
    **/
    count<T extends WorkItemCountArgs>(
      args?: Subset<T, WorkItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkItemAggregateArgs>(args: Subset<T, WorkItemAggregateArgs>): Prisma.PrismaPromise<GetWorkItemAggregateType<T>>

    /**
     * Group by WorkItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemGroupByArgs} args - Group by arguments.
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
      T extends WorkItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkItemGroupByArgs['orderBy'] }
        : { orderBy?: WorkItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkItem model
   */
  readonly fields: WorkItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the WorkItem model
   */
  interface WorkItemFieldRefs {
    readonly id: FieldRef<"WorkItem", 'String'>
    readonly title: FieldRef<"WorkItem", 'String'>
    readonly artist: FieldRef<"WorkItem", 'String'>
    readonly role: FieldRef<"WorkItem", 'String'>
    readonly embedUrl: FieldRef<"WorkItem", 'String'>
    readonly provider: FieldRef<"WorkItem", 'String'>
    readonly status: FieldRef<"WorkItem", 'String'>
    readonly orderIndex: FieldRef<"WorkItem", 'Int'>
    readonly createdAt: FieldRef<"WorkItem", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkItem findUnique
   */
  export type WorkItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Filter, which WorkItem to fetch.
     */
    where: WorkItemWhereUniqueInput
  }

  /**
   * WorkItem findUniqueOrThrow
   */
  export type WorkItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Filter, which WorkItem to fetch.
     */
    where: WorkItemWhereUniqueInput
  }

  /**
   * WorkItem findFirst
   */
  export type WorkItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Filter, which WorkItem to fetch.
     */
    where?: WorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItems to fetch.
     */
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkItems.
     */
    cursor?: WorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkItems.
     */
    distinct?: WorkItemScalarFieldEnum | WorkItemScalarFieldEnum[]
  }

  /**
   * WorkItem findFirstOrThrow
   */
  export type WorkItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Filter, which WorkItem to fetch.
     */
    where?: WorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItems to fetch.
     */
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkItems.
     */
    cursor?: WorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkItems.
     */
    distinct?: WorkItemScalarFieldEnum | WorkItemScalarFieldEnum[]
  }

  /**
   * WorkItem findMany
   */
  export type WorkItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Filter, which WorkItems to fetch.
     */
    where?: WorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItems to fetch.
     */
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkItems.
     */
    cursor?: WorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItems.
     */
    skip?: number
    distinct?: WorkItemScalarFieldEnum | WorkItemScalarFieldEnum[]
  }

  /**
   * WorkItem create
   */
  export type WorkItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * The data needed to create a WorkItem.
     */
    data: XOR<WorkItemCreateInput, WorkItemUncheckedCreateInput>
  }

  /**
   * WorkItem createMany
   */
  export type WorkItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkItems.
     */
    data: WorkItemCreateManyInput | WorkItemCreateManyInput[]
  }

  /**
   * WorkItem createManyAndReturn
   */
  export type WorkItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * The data used to create many WorkItems.
     */
    data: WorkItemCreateManyInput | WorkItemCreateManyInput[]
  }

  /**
   * WorkItem update
   */
  export type WorkItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * The data needed to update a WorkItem.
     */
    data: XOR<WorkItemUpdateInput, WorkItemUncheckedUpdateInput>
    /**
     * Choose, which WorkItem to update.
     */
    where: WorkItemWhereUniqueInput
  }

  /**
   * WorkItem updateMany
   */
  export type WorkItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkItems.
     */
    data: XOR<WorkItemUpdateManyMutationInput, WorkItemUncheckedUpdateManyInput>
    /**
     * Filter which WorkItems to update
     */
    where?: WorkItemWhereInput
    /**
     * Limit how many WorkItems to update.
     */
    limit?: number
  }

  /**
   * WorkItem updateManyAndReturn
   */
  export type WorkItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * The data used to update WorkItems.
     */
    data: XOR<WorkItemUpdateManyMutationInput, WorkItemUncheckedUpdateManyInput>
    /**
     * Filter which WorkItems to update
     */
    where?: WorkItemWhereInput
    /**
     * Limit how many WorkItems to update.
     */
    limit?: number
  }

  /**
   * WorkItem upsert
   */
  export type WorkItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * The filter to search for the WorkItem to update in case it exists.
     */
    where: WorkItemWhereUniqueInput
    /**
     * In case the WorkItem found by the `where` argument doesn't exist, create a new WorkItem with this data.
     */
    create: XOR<WorkItemCreateInput, WorkItemUncheckedCreateInput>
    /**
     * In case the WorkItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkItemUpdateInput, WorkItemUncheckedUpdateInput>
  }

  /**
   * WorkItem delete
   */
  export type WorkItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
    /**
     * Filter which WorkItem to delete.
     */
    where: WorkItemWhereUniqueInput
  }

  /**
   * WorkItem deleteMany
   */
  export type WorkItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkItems to delete
     */
    where?: WorkItemWhereInput
    /**
     * Limit how many WorkItems to delete.
     */
    limit?: number
  }

  /**
   * WorkItem without action
   */
  export type WorkItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkItem
     */
    omit?: WorkItemOmit<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    entityId: string | null
    adminEmail: string | null
    details: string | null
    timestamp: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    entityId: string | null
    adminEmail: string | null
    details: string | null
    timestamp: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    entityId: number
    adminEmail: number
    details: number
    timestamp: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    entityId?: true
    adminEmail?: true
    details?: true
    timestamp?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    entityId?: true
    adminEmail?: true
    details?: true
    timestamp?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    entityId?: true
    adminEmail?: true
    details?: true
    timestamp?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    entityId: string | null
    adminEmail: string
    details: string | null
    timestamp: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityId?: boolean
    adminEmail?: boolean
    details?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityId?: boolean
    adminEmail?: boolean
    details?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityId?: boolean
    adminEmail?: boolean
    details?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    entityId?: boolean
    adminEmail?: boolean
    details?: boolean
    timestamp?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "entityId" | "adminEmail" | "details" | "timestamp", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      entityId: string | null
      adminEmail: string
      details: string | null
      timestamp: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly adminEmail: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly timestamp: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model DevEmail
   */

  export type AggregateDevEmail = {
    _count: DevEmailCountAggregateOutputType | null
    _min: DevEmailMinAggregateOutputType | null
    _max: DevEmailMaxAggregateOutputType | null
  }

  export type DevEmailMinAggregateOutputType = {
    id: string | null
    toAddress: string | null
    subject: string | null
    htmlBody: string | null
    textBody: string | null
    sentAt: Date | null
  }

  export type DevEmailMaxAggregateOutputType = {
    id: string | null
    toAddress: string | null
    subject: string | null
    htmlBody: string | null
    textBody: string | null
    sentAt: Date | null
  }

  export type DevEmailCountAggregateOutputType = {
    id: number
    toAddress: number
    subject: number
    htmlBody: number
    textBody: number
    sentAt: number
    _all: number
  }


  export type DevEmailMinAggregateInputType = {
    id?: true
    toAddress?: true
    subject?: true
    htmlBody?: true
    textBody?: true
    sentAt?: true
  }

  export type DevEmailMaxAggregateInputType = {
    id?: true
    toAddress?: true
    subject?: true
    htmlBody?: true
    textBody?: true
    sentAt?: true
  }

  export type DevEmailCountAggregateInputType = {
    id?: true
    toAddress?: true
    subject?: true
    htmlBody?: true
    textBody?: true
    sentAt?: true
    _all?: true
  }

  export type DevEmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DevEmail to aggregate.
     */
    where?: DevEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DevEmails to fetch.
     */
    orderBy?: DevEmailOrderByWithRelationInput | DevEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DevEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DevEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DevEmails
    **/
    _count?: true | DevEmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevEmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevEmailMaxAggregateInputType
  }

  export type GetDevEmailAggregateType<T extends DevEmailAggregateArgs> = {
        [P in keyof T & keyof AggregateDevEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevEmail[P]>
      : GetScalarType<T[P], AggregateDevEmail[P]>
  }




  export type DevEmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevEmailWhereInput
    orderBy?: DevEmailOrderByWithAggregationInput | DevEmailOrderByWithAggregationInput[]
    by: DevEmailScalarFieldEnum[] | DevEmailScalarFieldEnum
    having?: DevEmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevEmailCountAggregateInputType | true
    _min?: DevEmailMinAggregateInputType
    _max?: DevEmailMaxAggregateInputType
  }

  export type DevEmailGroupByOutputType = {
    id: string
    toAddress: string
    subject: string
    htmlBody: string
    textBody: string | null
    sentAt: Date
    _count: DevEmailCountAggregateOutputType | null
    _min: DevEmailMinAggregateOutputType | null
    _max: DevEmailMaxAggregateOutputType | null
  }

  type GetDevEmailGroupByPayload<T extends DevEmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevEmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevEmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevEmailGroupByOutputType[P]>
            : GetScalarType<T[P], DevEmailGroupByOutputType[P]>
        }
      >
    >


  export type DevEmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toAddress?: boolean
    subject?: boolean
    htmlBody?: boolean
    textBody?: boolean
    sentAt?: boolean
  }, ExtArgs["result"]["devEmail"]>

  export type DevEmailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toAddress?: boolean
    subject?: boolean
    htmlBody?: boolean
    textBody?: boolean
    sentAt?: boolean
  }, ExtArgs["result"]["devEmail"]>

  export type DevEmailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toAddress?: boolean
    subject?: boolean
    htmlBody?: boolean
    textBody?: boolean
    sentAt?: boolean
  }, ExtArgs["result"]["devEmail"]>

  export type DevEmailSelectScalar = {
    id?: boolean
    toAddress?: boolean
    subject?: boolean
    htmlBody?: boolean
    textBody?: boolean
    sentAt?: boolean
  }

  export type DevEmailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "toAddress" | "subject" | "htmlBody" | "textBody" | "sentAt", ExtArgs["result"]["devEmail"]>

  export type $DevEmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DevEmail"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      toAddress: string
      subject: string
      htmlBody: string
      textBody: string | null
      sentAt: Date
    }, ExtArgs["result"]["devEmail"]>
    composites: {}
  }

  type DevEmailGetPayload<S extends boolean | null | undefined | DevEmailDefaultArgs> = $Result.GetResult<Prisma.$DevEmailPayload, S>

  type DevEmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DevEmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevEmailCountAggregateInputType | true
    }

  export interface DevEmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DevEmail'], meta: { name: 'DevEmail' } }
    /**
     * Find zero or one DevEmail that matches the filter.
     * @param {DevEmailFindUniqueArgs} args - Arguments to find a DevEmail
     * @example
     * // Get one DevEmail
     * const devEmail = await prisma.devEmail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevEmailFindUniqueArgs>(args: SelectSubset<T, DevEmailFindUniqueArgs<ExtArgs>>): Prisma__DevEmailClient<$Result.GetResult<Prisma.$DevEmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DevEmail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DevEmailFindUniqueOrThrowArgs} args - Arguments to find a DevEmail
     * @example
     * // Get one DevEmail
     * const devEmail = await prisma.devEmail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevEmailFindUniqueOrThrowArgs>(args: SelectSubset<T, DevEmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevEmailClient<$Result.GetResult<Prisma.$DevEmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DevEmail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevEmailFindFirstArgs} args - Arguments to find a DevEmail
     * @example
     * // Get one DevEmail
     * const devEmail = await prisma.devEmail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevEmailFindFirstArgs>(args?: SelectSubset<T, DevEmailFindFirstArgs<ExtArgs>>): Prisma__DevEmailClient<$Result.GetResult<Prisma.$DevEmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DevEmail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevEmailFindFirstOrThrowArgs} args - Arguments to find a DevEmail
     * @example
     * // Get one DevEmail
     * const devEmail = await prisma.devEmail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevEmailFindFirstOrThrowArgs>(args?: SelectSubset<T, DevEmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevEmailClient<$Result.GetResult<Prisma.$DevEmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DevEmails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevEmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DevEmails
     * const devEmails = await prisma.devEmail.findMany()
     * 
     * // Get first 10 DevEmails
     * const devEmails = await prisma.devEmail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devEmailWithIdOnly = await prisma.devEmail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DevEmailFindManyArgs>(args?: SelectSubset<T, DevEmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevEmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DevEmail.
     * @param {DevEmailCreateArgs} args - Arguments to create a DevEmail.
     * @example
     * // Create one DevEmail
     * const DevEmail = await prisma.devEmail.create({
     *   data: {
     *     // ... data to create a DevEmail
     *   }
     * })
     * 
     */
    create<T extends DevEmailCreateArgs>(args: SelectSubset<T, DevEmailCreateArgs<ExtArgs>>): Prisma__DevEmailClient<$Result.GetResult<Prisma.$DevEmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DevEmails.
     * @param {DevEmailCreateManyArgs} args - Arguments to create many DevEmails.
     * @example
     * // Create many DevEmails
     * const devEmail = await prisma.devEmail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevEmailCreateManyArgs>(args?: SelectSubset<T, DevEmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DevEmails and returns the data saved in the database.
     * @param {DevEmailCreateManyAndReturnArgs} args - Arguments to create many DevEmails.
     * @example
     * // Create many DevEmails
     * const devEmail = await prisma.devEmail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DevEmails and only return the `id`
     * const devEmailWithIdOnly = await prisma.devEmail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DevEmailCreateManyAndReturnArgs>(args?: SelectSubset<T, DevEmailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevEmailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DevEmail.
     * @param {DevEmailDeleteArgs} args - Arguments to delete one DevEmail.
     * @example
     * // Delete one DevEmail
     * const DevEmail = await prisma.devEmail.delete({
     *   where: {
     *     // ... filter to delete one DevEmail
     *   }
     * })
     * 
     */
    delete<T extends DevEmailDeleteArgs>(args: SelectSubset<T, DevEmailDeleteArgs<ExtArgs>>): Prisma__DevEmailClient<$Result.GetResult<Prisma.$DevEmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DevEmail.
     * @param {DevEmailUpdateArgs} args - Arguments to update one DevEmail.
     * @example
     * // Update one DevEmail
     * const devEmail = await prisma.devEmail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevEmailUpdateArgs>(args: SelectSubset<T, DevEmailUpdateArgs<ExtArgs>>): Prisma__DevEmailClient<$Result.GetResult<Prisma.$DevEmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DevEmails.
     * @param {DevEmailDeleteManyArgs} args - Arguments to filter DevEmails to delete.
     * @example
     * // Delete a few DevEmails
     * const { count } = await prisma.devEmail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevEmailDeleteManyArgs>(args?: SelectSubset<T, DevEmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DevEmails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevEmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DevEmails
     * const devEmail = await prisma.devEmail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevEmailUpdateManyArgs>(args: SelectSubset<T, DevEmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DevEmails and returns the data updated in the database.
     * @param {DevEmailUpdateManyAndReturnArgs} args - Arguments to update many DevEmails.
     * @example
     * // Update many DevEmails
     * const devEmail = await prisma.devEmail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DevEmails and only return the `id`
     * const devEmailWithIdOnly = await prisma.devEmail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DevEmailUpdateManyAndReturnArgs>(args: SelectSubset<T, DevEmailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevEmailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DevEmail.
     * @param {DevEmailUpsertArgs} args - Arguments to update or create a DevEmail.
     * @example
     * // Update or create a DevEmail
     * const devEmail = await prisma.devEmail.upsert({
     *   create: {
     *     // ... data to create a DevEmail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DevEmail we want to update
     *   }
     * })
     */
    upsert<T extends DevEmailUpsertArgs>(args: SelectSubset<T, DevEmailUpsertArgs<ExtArgs>>): Prisma__DevEmailClient<$Result.GetResult<Prisma.$DevEmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DevEmails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevEmailCountArgs} args - Arguments to filter DevEmails to count.
     * @example
     * // Count the number of DevEmails
     * const count = await prisma.devEmail.count({
     *   where: {
     *     // ... the filter for the DevEmails we want to count
     *   }
     * })
    **/
    count<T extends DevEmailCountArgs>(
      args?: Subset<T, DevEmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevEmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DevEmail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevEmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DevEmailAggregateArgs>(args: Subset<T, DevEmailAggregateArgs>): Prisma.PrismaPromise<GetDevEmailAggregateType<T>>

    /**
     * Group by DevEmail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevEmailGroupByArgs} args - Group by arguments.
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
      T extends DevEmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevEmailGroupByArgs['orderBy'] }
        : { orderBy?: DevEmailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DevEmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DevEmail model
   */
  readonly fields: DevEmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DevEmail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevEmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the DevEmail model
   */
  interface DevEmailFieldRefs {
    readonly id: FieldRef<"DevEmail", 'String'>
    readonly toAddress: FieldRef<"DevEmail", 'String'>
    readonly subject: FieldRef<"DevEmail", 'String'>
    readonly htmlBody: FieldRef<"DevEmail", 'String'>
    readonly textBody: FieldRef<"DevEmail", 'String'>
    readonly sentAt: FieldRef<"DevEmail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DevEmail findUnique
   */
  export type DevEmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevEmail
     */
    select?: DevEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevEmail
     */
    omit?: DevEmailOmit<ExtArgs> | null
    /**
     * Filter, which DevEmail to fetch.
     */
    where: DevEmailWhereUniqueInput
  }

  /**
   * DevEmail findUniqueOrThrow
   */
  export type DevEmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevEmail
     */
    select?: DevEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevEmail
     */
    omit?: DevEmailOmit<ExtArgs> | null
    /**
     * Filter, which DevEmail to fetch.
     */
    where: DevEmailWhereUniqueInput
  }

  /**
   * DevEmail findFirst
   */
  export type DevEmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevEmail
     */
    select?: DevEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevEmail
     */
    omit?: DevEmailOmit<ExtArgs> | null
    /**
     * Filter, which DevEmail to fetch.
     */
    where?: DevEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DevEmails to fetch.
     */
    orderBy?: DevEmailOrderByWithRelationInput | DevEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DevEmails.
     */
    cursor?: DevEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DevEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DevEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DevEmails.
     */
    distinct?: DevEmailScalarFieldEnum | DevEmailScalarFieldEnum[]
  }

  /**
   * DevEmail findFirstOrThrow
   */
  export type DevEmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevEmail
     */
    select?: DevEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevEmail
     */
    omit?: DevEmailOmit<ExtArgs> | null
    /**
     * Filter, which DevEmail to fetch.
     */
    where?: DevEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DevEmails to fetch.
     */
    orderBy?: DevEmailOrderByWithRelationInput | DevEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DevEmails.
     */
    cursor?: DevEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DevEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DevEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DevEmails.
     */
    distinct?: DevEmailScalarFieldEnum | DevEmailScalarFieldEnum[]
  }

  /**
   * DevEmail findMany
   */
  export type DevEmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevEmail
     */
    select?: DevEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevEmail
     */
    omit?: DevEmailOmit<ExtArgs> | null
    /**
     * Filter, which DevEmails to fetch.
     */
    where?: DevEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DevEmails to fetch.
     */
    orderBy?: DevEmailOrderByWithRelationInput | DevEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DevEmails.
     */
    cursor?: DevEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DevEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DevEmails.
     */
    skip?: number
    distinct?: DevEmailScalarFieldEnum | DevEmailScalarFieldEnum[]
  }

  /**
   * DevEmail create
   */
  export type DevEmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevEmail
     */
    select?: DevEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevEmail
     */
    omit?: DevEmailOmit<ExtArgs> | null
    /**
     * The data needed to create a DevEmail.
     */
    data: XOR<DevEmailCreateInput, DevEmailUncheckedCreateInput>
  }

  /**
   * DevEmail createMany
   */
  export type DevEmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DevEmails.
     */
    data: DevEmailCreateManyInput | DevEmailCreateManyInput[]
  }

  /**
   * DevEmail createManyAndReturn
   */
  export type DevEmailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevEmail
     */
    select?: DevEmailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DevEmail
     */
    omit?: DevEmailOmit<ExtArgs> | null
    /**
     * The data used to create many DevEmails.
     */
    data: DevEmailCreateManyInput | DevEmailCreateManyInput[]
  }

  /**
   * DevEmail update
   */
  export type DevEmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevEmail
     */
    select?: DevEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevEmail
     */
    omit?: DevEmailOmit<ExtArgs> | null
    /**
     * The data needed to update a DevEmail.
     */
    data: XOR<DevEmailUpdateInput, DevEmailUncheckedUpdateInput>
    /**
     * Choose, which DevEmail to update.
     */
    where: DevEmailWhereUniqueInput
  }

  /**
   * DevEmail updateMany
   */
  export type DevEmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DevEmails.
     */
    data: XOR<DevEmailUpdateManyMutationInput, DevEmailUncheckedUpdateManyInput>
    /**
     * Filter which DevEmails to update
     */
    where?: DevEmailWhereInput
    /**
     * Limit how many DevEmails to update.
     */
    limit?: number
  }

  /**
   * DevEmail updateManyAndReturn
   */
  export type DevEmailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevEmail
     */
    select?: DevEmailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DevEmail
     */
    omit?: DevEmailOmit<ExtArgs> | null
    /**
     * The data used to update DevEmails.
     */
    data: XOR<DevEmailUpdateManyMutationInput, DevEmailUncheckedUpdateManyInput>
    /**
     * Filter which DevEmails to update
     */
    where?: DevEmailWhereInput
    /**
     * Limit how many DevEmails to update.
     */
    limit?: number
  }

  /**
   * DevEmail upsert
   */
  export type DevEmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevEmail
     */
    select?: DevEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevEmail
     */
    omit?: DevEmailOmit<ExtArgs> | null
    /**
     * The filter to search for the DevEmail to update in case it exists.
     */
    where: DevEmailWhereUniqueInput
    /**
     * In case the DevEmail found by the `where` argument doesn't exist, create a new DevEmail with this data.
     */
    create: XOR<DevEmailCreateInput, DevEmailUncheckedCreateInput>
    /**
     * In case the DevEmail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevEmailUpdateInput, DevEmailUncheckedUpdateInput>
  }

  /**
   * DevEmail delete
   */
  export type DevEmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevEmail
     */
    select?: DevEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevEmail
     */
    omit?: DevEmailOmit<ExtArgs> | null
    /**
     * Filter which DevEmail to delete.
     */
    where: DevEmailWhereUniqueInput
  }

  /**
   * DevEmail deleteMany
   */
  export type DevEmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DevEmails to delete
     */
    where?: DevEmailWhereInput
    /**
     * Limit how many DevEmails to delete.
     */
    limit?: number
  }

  /**
   * DevEmail without action
   */
  export type DevEmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevEmail
     */
    select?: DevEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevEmail
     */
    omit?: DevEmailOmit<ExtArgs> | null
  }


  /**
   * Model EmailEvent
   */

  export type AggregateEmailEvent = {
    _count: EmailEventCountAggregateOutputType | null
    _avg: EmailEventAvgAggregateOutputType | null
    _sum: EmailEventSumAggregateOutputType | null
    _min: EmailEventMinAggregateOutputType | null
    _max: EmailEventMaxAggregateOutputType | null
  }

  export type EmailEventAvgAggregateOutputType = {
    intendedCount: number | null
  }

  export type EmailEventSumAggregateOutputType = {
    intendedCount: number | null
  }

  export type EmailEventMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    eventTemplate: string | null
    orderId: string | null
    intendedCount: number | null
    intendedTo: string | null
    actualTo: string | null
    subject: string | null
    status: string | null
    errorCode: string | null
    errorSummary: string | null
    requestId: string | null
  }

  export type EmailEventMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    eventTemplate: string | null
    orderId: string | null
    intendedCount: number | null
    intendedTo: string | null
    actualTo: string | null
    subject: string | null
    status: string | null
    errorCode: string | null
    errorSummary: string | null
    requestId: string | null
  }

  export type EmailEventCountAggregateOutputType = {
    id: number
    timestamp: number
    eventTemplate: number
    orderId: number
    intendedCount: number
    intendedTo: number
    actualTo: number
    subject: number
    status: number
    errorCode: number
    errorSummary: number
    requestId: number
    _all: number
  }


  export type EmailEventAvgAggregateInputType = {
    intendedCount?: true
  }

  export type EmailEventSumAggregateInputType = {
    intendedCount?: true
  }

  export type EmailEventMinAggregateInputType = {
    id?: true
    timestamp?: true
    eventTemplate?: true
    orderId?: true
    intendedCount?: true
    intendedTo?: true
    actualTo?: true
    subject?: true
    status?: true
    errorCode?: true
    errorSummary?: true
    requestId?: true
  }

  export type EmailEventMaxAggregateInputType = {
    id?: true
    timestamp?: true
    eventTemplate?: true
    orderId?: true
    intendedCount?: true
    intendedTo?: true
    actualTo?: true
    subject?: true
    status?: true
    errorCode?: true
    errorSummary?: true
    requestId?: true
  }

  export type EmailEventCountAggregateInputType = {
    id?: true
    timestamp?: true
    eventTemplate?: true
    orderId?: true
    intendedCount?: true
    intendedTo?: true
    actualTo?: true
    subject?: true
    status?: true
    errorCode?: true
    errorSummary?: true
    requestId?: true
    _all?: true
  }

  export type EmailEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailEvent to aggregate.
     */
    where?: EmailEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailEvents to fetch.
     */
    orderBy?: EmailEventOrderByWithRelationInput | EmailEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailEvents
    **/
    _count?: true | EmailEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailEventMaxAggregateInputType
  }

  export type GetEmailEventAggregateType<T extends EmailEventAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailEvent[P]>
      : GetScalarType<T[P], AggregateEmailEvent[P]>
  }




  export type EmailEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailEventWhereInput
    orderBy?: EmailEventOrderByWithAggregationInput | EmailEventOrderByWithAggregationInput[]
    by: EmailEventScalarFieldEnum[] | EmailEventScalarFieldEnum
    having?: EmailEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailEventCountAggregateInputType | true
    _avg?: EmailEventAvgAggregateInputType
    _sum?: EmailEventSumAggregateInputType
    _min?: EmailEventMinAggregateInputType
    _max?: EmailEventMaxAggregateInputType
  }

  export type EmailEventGroupByOutputType = {
    id: string
    timestamp: Date
    eventTemplate: string | null
    orderId: string | null
    intendedCount: number
    intendedTo: string
    actualTo: string
    subject: string
    status: string
    errorCode: string | null
    errorSummary: string | null
    requestId: string | null
    _count: EmailEventCountAggregateOutputType | null
    _avg: EmailEventAvgAggregateOutputType | null
    _sum: EmailEventSumAggregateOutputType | null
    _min: EmailEventMinAggregateOutputType | null
    _max: EmailEventMaxAggregateOutputType | null
  }

  type GetEmailEventGroupByPayload<T extends EmailEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailEventGroupByOutputType[P]>
            : GetScalarType<T[P], EmailEventGroupByOutputType[P]>
        }
      >
    >


  export type EmailEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventTemplate?: boolean
    orderId?: boolean
    intendedCount?: boolean
    intendedTo?: boolean
    actualTo?: boolean
    subject?: boolean
    status?: boolean
    errorCode?: boolean
    errorSummary?: boolean
    requestId?: boolean
  }, ExtArgs["result"]["emailEvent"]>

  export type EmailEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventTemplate?: boolean
    orderId?: boolean
    intendedCount?: boolean
    intendedTo?: boolean
    actualTo?: boolean
    subject?: boolean
    status?: boolean
    errorCode?: boolean
    errorSummary?: boolean
    requestId?: boolean
  }, ExtArgs["result"]["emailEvent"]>

  export type EmailEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventTemplate?: boolean
    orderId?: boolean
    intendedCount?: boolean
    intendedTo?: boolean
    actualTo?: boolean
    subject?: boolean
    status?: boolean
    errorCode?: boolean
    errorSummary?: boolean
    requestId?: boolean
  }, ExtArgs["result"]["emailEvent"]>

  export type EmailEventSelectScalar = {
    id?: boolean
    timestamp?: boolean
    eventTemplate?: boolean
    orderId?: boolean
    intendedCount?: boolean
    intendedTo?: boolean
    actualTo?: boolean
    subject?: boolean
    status?: boolean
    errorCode?: boolean
    errorSummary?: boolean
    requestId?: boolean
  }

  export type EmailEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "eventTemplate" | "orderId" | "intendedCount" | "intendedTo" | "actualTo" | "subject" | "status" | "errorCode" | "errorSummary" | "requestId", ExtArgs["result"]["emailEvent"]>

  export type $EmailEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      eventTemplate: string | null
      orderId: string | null
      intendedCount: number
      intendedTo: string
      actualTo: string
      subject: string
      status: string
      errorCode: string | null
      errorSummary: string | null
      requestId: string | null
    }, ExtArgs["result"]["emailEvent"]>
    composites: {}
  }

  type EmailEventGetPayload<S extends boolean | null | undefined | EmailEventDefaultArgs> = $Result.GetResult<Prisma.$EmailEventPayload, S>

  type EmailEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailEventCountAggregateInputType | true
    }

  export interface EmailEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailEvent'], meta: { name: 'EmailEvent' } }
    /**
     * Find zero or one EmailEvent that matches the filter.
     * @param {EmailEventFindUniqueArgs} args - Arguments to find a EmailEvent
     * @example
     * // Get one EmailEvent
     * const emailEvent = await prisma.emailEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailEventFindUniqueArgs>(args: SelectSubset<T, EmailEventFindUniqueArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailEventFindUniqueOrThrowArgs} args - Arguments to find a EmailEvent
     * @example
     * // Get one EmailEvent
     * const emailEvent = await prisma.emailEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailEventFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventFindFirstArgs} args - Arguments to find a EmailEvent
     * @example
     * // Get one EmailEvent
     * const emailEvent = await prisma.emailEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailEventFindFirstArgs>(args?: SelectSubset<T, EmailEventFindFirstArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventFindFirstOrThrowArgs} args - Arguments to find a EmailEvent
     * @example
     * // Get one EmailEvent
     * const emailEvent = await prisma.emailEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailEventFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailEvents
     * const emailEvents = await prisma.emailEvent.findMany()
     * 
     * // Get first 10 EmailEvents
     * const emailEvents = await prisma.emailEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailEventWithIdOnly = await prisma.emailEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailEventFindManyArgs>(args?: SelectSubset<T, EmailEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailEvent.
     * @param {EmailEventCreateArgs} args - Arguments to create a EmailEvent.
     * @example
     * // Create one EmailEvent
     * const EmailEvent = await prisma.emailEvent.create({
     *   data: {
     *     // ... data to create a EmailEvent
     *   }
     * })
     * 
     */
    create<T extends EmailEventCreateArgs>(args: SelectSubset<T, EmailEventCreateArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailEvents.
     * @param {EmailEventCreateManyArgs} args - Arguments to create many EmailEvents.
     * @example
     * // Create many EmailEvents
     * const emailEvent = await prisma.emailEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailEventCreateManyArgs>(args?: SelectSubset<T, EmailEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailEvents and returns the data saved in the database.
     * @param {EmailEventCreateManyAndReturnArgs} args - Arguments to create many EmailEvents.
     * @example
     * // Create many EmailEvents
     * const emailEvent = await prisma.emailEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailEvents and only return the `id`
     * const emailEventWithIdOnly = await prisma.emailEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailEventCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailEvent.
     * @param {EmailEventDeleteArgs} args - Arguments to delete one EmailEvent.
     * @example
     * // Delete one EmailEvent
     * const EmailEvent = await prisma.emailEvent.delete({
     *   where: {
     *     // ... filter to delete one EmailEvent
     *   }
     * })
     * 
     */
    delete<T extends EmailEventDeleteArgs>(args: SelectSubset<T, EmailEventDeleteArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailEvent.
     * @param {EmailEventUpdateArgs} args - Arguments to update one EmailEvent.
     * @example
     * // Update one EmailEvent
     * const emailEvent = await prisma.emailEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailEventUpdateArgs>(args: SelectSubset<T, EmailEventUpdateArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailEvents.
     * @param {EmailEventDeleteManyArgs} args - Arguments to filter EmailEvents to delete.
     * @example
     * // Delete a few EmailEvents
     * const { count } = await prisma.emailEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailEventDeleteManyArgs>(args?: SelectSubset<T, EmailEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailEvents
     * const emailEvent = await prisma.emailEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailEventUpdateManyArgs>(args: SelectSubset<T, EmailEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailEvents and returns the data updated in the database.
     * @param {EmailEventUpdateManyAndReturnArgs} args - Arguments to update many EmailEvents.
     * @example
     * // Update many EmailEvents
     * const emailEvent = await prisma.emailEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailEvents and only return the `id`
     * const emailEventWithIdOnly = await prisma.emailEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailEventUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailEvent.
     * @param {EmailEventUpsertArgs} args - Arguments to update or create a EmailEvent.
     * @example
     * // Update or create a EmailEvent
     * const emailEvent = await prisma.emailEvent.upsert({
     *   create: {
     *     // ... data to create a EmailEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailEvent we want to update
     *   }
     * })
     */
    upsert<T extends EmailEventUpsertArgs>(args: SelectSubset<T, EmailEventUpsertArgs<ExtArgs>>): Prisma__EmailEventClient<$Result.GetResult<Prisma.$EmailEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventCountArgs} args - Arguments to filter EmailEvents to count.
     * @example
     * // Count the number of EmailEvents
     * const count = await prisma.emailEvent.count({
     *   where: {
     *     // ... the filter for the EmailEvents we want to count
     *   }
     * })
    **/
    count<T extends EmailEventCountArgs>(
      args?: Subset<T, EmailEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailEventAggregateArgs>(args: Subset<T, EmailEventAggregateArgs>): Prisma.PrismaPromise<GetEmailEventAggregateType<T>>

    /**
     * Group by EmailEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailEventGroupByArgs} args - Group by arguments.
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
      T extends EmailEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailEventGroupByArgs['orderBy'] }
        : { orderBy?: EmailEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailEvent model
   */
  readonly fields: EmailEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the EmailEvent model
   */
  interface EmailEventFieldRefs {
    readonly id: FieldRef<"EmailEvent", 'String'>
    readonly timestamp: FieldRef<"EmailEvent", 'DateTime'>
    readonly eventTemplate: FieldRef<"EmailEvent", 'String'>
    readonly orderId: FieldRef<"EmailEvent", 'String'>
    readonly intendedCount: FieldRef<"EmailEvent", 'Int'>
    readonly intendedTo: FieldRef<"EmailEvent", 'String'>
    readonly actualTo: FieldRef<"EmailEvent", 'String'>
    readonly subject: FieldRef<"EmailEvent", 'String'>
    readonly status: FieldRef<"EmailEvent", 'String'>
    readonly errorCode: FieldRef<"EmailEvent", 'String'>
    readonly errorSummary: FieldRef<"EmailEvent", 'String'>
    readonly requestId: FieldRef<"EmailEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailEvent findUnique
   */
  export type EmailEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Filter, which EmailEvent to fetch.
     */
    where: EmailEventWhereUniqueInput
  }

  /**
   * EmailEvent findUniqueOrThrow
   */
  export type EmailEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Filter, which EmailEvent to fetch.
     */
    where: EmailEventWhereUniqueInput
  }

  /**
   * EmailEvent findFirst
   */
  export type EmailEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Filter, which EmailEvent to fetch.
     */
    where?: EmailEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailEvents to fetch.
     */
    orderBy?: EmailEventOrderByWithRelationInput | EmailEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailEvents.
     */
    cursor?: EmailEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailEvents.
     */
    distinct?: EmailEventScalarFieldEnum | EmailEventScalarFieldEnum[]
  }

  /**
   * EmailEvent findFirstOrThrow
   */
  export type EmailEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Filter, which EmailEvent to fetch.
     */
    where?: EmailEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailEvents to fetch.
     */
    orderBy?: EmailEventOrderByWithRelationInput | EmailEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailEvents.
     */
    cursor?: EmailEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailEvents.
     */
    distinct?: EmailEventScalarFieldEnum | EmailEventScalarFieldEnum[]
  }

  /**
   * EmailEvent findMany
   */
  export type EmailEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Filter, which EmailEvents to fetch.
     */
    where?: EmailEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailEvents to fetch.
     */
    orderBy?: EmailEventOrderByWithRelationInput | EmailEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailEvents.
     */
    cursor?: EmailEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailEvents.
     */
    skip?: number
    distinct?: EmailEventScalarFieldEnum | EmailEventScalarFieldEnum[]
  }

  /**
   * EmailEvent create
   */
  export type EmailEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailEvent.
     */
    data: XOR<EmailEventCreateInput, EmailEventUncheckedCreateInput>
  }

  /**
   * EmailEvent createMany
   */
  export type EmailEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailEvents.
     */
    data: EmailEventCreateManyInput | EmailEventCreateManyInput[]
  }

  /**
   * EmailEvent createManyAndReturn
   */
  export type EmailEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * The data used to create many EmailEvents.
     */
    data: EmailEventCreateManyInput | EmailEventCreateManyInput[]
  }

  /**
   * EmailEvent update
   */
  export type EmailEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailEvent.
     */
    data: XOR<EmailEventUpdateInput, EmailEventUncheckedUpdateInput>
    /**
     * Choose, which EmailEvent to update.
     */
    where: EmailEventWhereUniqueInput
  }

  /**
   * EmailEvent updateMany
   */
  export type EmailEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailEvents.
     */
    data: XOR<EmailEventUpdateManyMutationInput, EmailEventUncheckedUpdateManyInput>
    /**
     * Filter which EmailEvents to update
     */
    where?: EmailEventWhereInput
    /**
     * Limit how many EmailEvents to update.
     */
    limit?: number
  }

  /**
   * EmailEvent updateManyAndReturn
   */
  export type EmailEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * The data used to update EmailEvents.
     */
    data: XOR<EmailEventUpdateManyMutationInput, EmailEventUncheckedUpdateManyInput>
    /**
     * Filter which EmailEvents to update
     */
    where?: EmailEventWhereInput
    /**
     * Limit how many EmailEvents to update.
     */
    limit?: number
  }

  /**
   * EmailEvent upsert
   */
  export type EmailEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailEvent to update in case it exists.
     */
    where: EmailEventWhereUniqueInput
    /**
     * In case the EmailEvent found by the `where` argument doesn't exist, create a new EmailEvent with this data.
     */
    create: XOR<EmailEventCreateInput, EmailEventUncheckedCreateInput>
    /**
     * In case the EmailEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailEventUpdateInput, EmailEventUncheckedUpdateInput>
  }

  /**
   * EmailEvent delete
   */
  export type EmailEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
    /**
     * Filter which EmailEvent to delete.
     */
    where: EmailEventWhereUniqueInput
  }

  /**
   * EmailEvent deleteMany
   */
  export type EmailEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailEvents to delete
     */
    where?: EmailEventWhereInput
    /**
     * Limit how many EmailEvents to delete.
     */
    limit?: number
  }

  /**
   * EmailEvent without action
   */
  export type EmailEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailEvent
     */
    select?: EmailEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailEvent
     */
    omit?: EmailEventOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    title: 'title',
    comment: 'comment',
    displayName: 'displayName',
    email: 'email',
    status: 'status',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orderId: 'orderId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const AdminReplyScalarFieldEnum: {
    id: 'id',
    content: 'content',
    reviewId: 'reviewId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminReplyScalarFieldEnum = (typeof AdminReplyScalarFieldEnum)[keyof typeof AdminReplyScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    publicId: 'publicId',
    customerName: 'customerName',
    customerEmail: 'customerEmail',
    serviceType: 'serviceType',
    genre: 'genre',
    message: 'message',
    numSongs: 'numSongs',
    songLength: 'songLength',
    numStems: 'numStems',
    status: 'status',
    driveLink: 'driveLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderStatusHistoryScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    changedBy: 'changedBy',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type OrderStatusHistoryScalarFieldEnum = (typeof OrderStatusHistoryScalarFieldEnum)[keyof typeof OrderStatusHistoryScalarFieldEnum]


  export const ReviewTokenScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
  };

  export type ReviewTokenScalarFieldEnum = (typeof ReviewTokenScalarFieldEnum)[keyof typeof ReviewTokenScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const SiteSettingVersionScalarFieldEnum: {
    version: 'version',
    payload: 'payload',
    changedBy: 'changedBy',
    createdAt: 'createdAt'
  };

  export type SiteSettingVersionScalarFieldEnum = (typeof SiteSettingVersionScalarFieldEnum)[keyof typeof SiteSettingVersionScalarFieldEnum]


  export const WorkItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    artist: 'artist',
    role: 'role',
    embedUrl: 'embedUrl',
    provider: 'provider',
    status: 'status',
    orderIndex: 'orderIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkItemScalarFieldEnum = (typeof WorkItemScalarFieldEnum)[keyof typeof WorkItemScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    entityId: 'entityId',
    adminEmail: 'adminEmail',
    details: 'details',
    timestamp: 'timestamp'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const DevEmailScalarFieldEnum: {
    id: 'id',
    toAddress: 'toAddress',
    subject: 'subject',
    htmlBody: 'htmlBody',
    textBody: 'textBody',
    sentAt: 'sentAt'
  };

  export type DevEmailScalarFieldEnum = (typeof DevEmailScalarFieldEnum)[keyof typeof DevEmailScalarFieldEnum]


  export const EmailEventScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    eventTemplate: 'eventTemplate',
    orderId: 'orderId',
    intendedCount: 'intendedCount',
    intendedTo: 'intendedTo',
    actualTo: 'actualTo',
    subject: 'subject',
    status: 'status',
    errorCode: 'errorCode',
    errorSummary: 'errorSummary',
    requestId: 'requestId'
  };

  export type EmailEventScalarFieldEnum = (typeof EmailEventScalarFieldEnum)[keyof typeof EmailEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    comment?: StringFilter<"Review"> | string
    displayName?: StringFilter<"Review"> | string
    email?: StringFilter<"Review"> | string
    status?: StringFilter<"Review"> | string
    ipAddress?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    orderId?: StringNullableFilter<"Review"> | string | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
    reply?: XOR<AdminReplyNullableScalarRelationFilter, AdminReplyWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    comment?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
    reply?: AdminReplyOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    comment?: StringFilter<"Review"> | string
    displayName?: StringFilter<"Review"> | string
    email?: StringFilter<"Review"> | string
    status?: StringFilter<"Review"> | string
    ipAddress?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
    reply?: XOR<AdminReplyNullableScalarRelationFilter, AdminReplyWhereInput> | null
  }, "id" | "orderId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    comment?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    title?: StringNullableWithAggregatesFilter<"Review"> | string | null
    comment?: StringWithAggregatesFilter<"Review"> | string
    displayName?: StringWithAggregatesFilter<"Review"> | string
    email?: StringWithAggregatesFilter<"Review"> | string
    status?: StringWithAggregatesFilter<"Review"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    orderId?: StringNullableWithAggregatesFilter<"Review"> | string | null
  }

  export type AdminReplyWhereInput = {
    AND?: AdminReplyWhereInput | AdminReplyWhereInput[]
    OR?: AdminReplyWhereInput[]
    NOT?: AdminReplyWhereInput | AdminReplyWhereInput[]
    id?: StringFilter<"AdminReply"> | string
    content?: StringFilter<"AdminReply"> | string
    reviewId?: StringFilter<"AdminReply"> | string
    createdAt?: DateTimeFilter<"AdminReply"> | Date | string
    updatedAt?: DateTimeFilter<"AdminReply"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type AdminReplyOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type AdminReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reviewId?: string
    AND?: AdminReplyWhereInput | AdminReplyWhereInput[]
    OR?: AdminReplyWhereInput[]
    NOT?: AdminReplyWhereInput | AdminReplyWhereInput[]
    content?: StringFilter<"AdminReply"> | string
    createdAt?: DateTimeFilter<"AdminReply"> | Date | string
    updatedAt?: DateTimeFilter<"AdminReply"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id" | "reviewId">

  export type AdminReplyOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminReplyCountOrderByAggregateInput
    _max?: AdminReplyMaxOrderByAggregateInput
    _min?: AdminReplyMinOrderByAggregateInput
  }

  export type AdminReplyScalarWhereWithAggregatesInput = {
    AND?: AdminReplyScalarWhereWithAggregatesInput | AdminReplyScalarWhereWithAggregatesInput[]
    OR?: AdminReplyScalarWhereWithAggregatesInput[]
    NOT?: AdminReplyScalarWhereWithAggregatesInput | AdminReplyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminReply"> | string
    content?: StringWithAggregatesFilter<"AdminReply"> | string
    reviewId?: StringWithAggregatesFilter<"AdminReply"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminReply"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminReply"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    publicId?: StringFilter<"Order"> | string
    customerName?: StringFilter<"Order"> | string
    customerEmail?: StringFilter<"Order"> | string
    serviceType?: StringFilter<"Order"> | string
    genre?: StringNullableFilter<"Order"> | string | null
    message?: StringNullableFilter<"Order"> | string | null
    numSongs?: IntNullableFilter<"Order"> | number | null
    songLength?: StringNullableFilter<"Order"> | string | null
    numStems?: IntNullableFilter<"Order"> | number | null
    status?: StringFilter<"Order"> | string
    driveLink?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    statusHistory?: OrderStatusHistoryListRelationFilter
    reviewToken?: XOR<ReviewTokenNullableScalarRelationFilter, ReviewTokenWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    publicId?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    serviceType?: SortOrder
    genre?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    numSongs?: SortOrderInput | SortOrder
    songLength?: SortOrderInput | SortOrder
    numStems?: SortOrderInput | SortOrder
    status?: SortOrder
    driveLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statusHistory?: OrderStatusHistoryOrderByRelationAggregateInput
    reviewToken?: ReviewTokenOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicId?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerName?: StringFilter<"Order"> | string
    customerEmail?: StringFilter<"Order"> | string
    serviceType?: StringFilter<"Order"> | string
    genre?: StringNullableFilter<"Order"> | string | null
    message?: StringNullableFilter<"Order"> | string | null
    numSongs?: IntNullableFilter<"Order"> | number | null
    songLength?: StringNullableFilter<"Order"> | string | null
    numStems?: IntNullableFilter<"Order"> | number | null
    status?: StringFilter<"Order"> | string
    driveLink?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    statusHistory?: OrderStatusHistoryListRelationFilter
    reviewToken?: XOR<ReviewTokenNullableScalarRelationFilter, ReviewTokenWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }, "id" | "publicId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    publicId?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    serviceType?: SortOrder
    genre?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    numSongs?: SortOrderInput | SortOrder
    songLength?: SortOrderInput | SortOrder
    numStems?: SortOrderInput | SortOrder
    status?: SortOrder
    driveLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    publicId?: StringWithAggregatesFilter<"Order"> | string
    customerName?: StringWithAggregatesFilter<"Order"> | string
    customerEmail?: StringWithAggregatesFilter<"Order"> | string
    serviceType?: StringWithAggregatesFilter<"Order"> | string
    genre?: StringNullableWithAggregatesFilter<"Order"> | string | null
    message?: StringNullableWithAggregatesFilter<"Order"> | string | null
    numSongs?: IntNullableWithAggregatesFilter<"Order"> | number | null
    songLength?: StringNullableWithAggregatesFilter<"Order"> | string | null
    numStems?: IntNullableWithAggregatesFilter<"Order"> | number | null
    status?: StringWithAggregatesFilter<"Order"> | string
    driveLink?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderStatusHistoryWhereInput = {
    AND?: OrderStatusHistoryWhereInput | OrderStatusHistoryWhereInput[]
    OR?: OrderStatusHistoryWhereInput[]
    NOT?: OrderStatusHistoryWhereInput | OrderStatusHistoryWhereInput[]
    id?: StringFilter<"OrderStatusHistory"> | string
    orderId?: StringFilter<"OrderStatusHistory"> | string
    fromStatus?: StringFilter<"OrderStatusHistory"> | string
    toStatus?: StringFilter<"OrderStatusHistory"> | string
    changedBy?: StringFilter<"OrderStatusHistory"> | string
    message?: StringNullableFilter<"OrderStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"OrderStatusHistory"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderStatusHistoryOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderStatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderStatusHistoryWhereInput | OrderStatusHistoryWhereInput[]
    OR?: OrderStatusHistoryWhereInput[]
    NOT?: OrderStatusHistoryWhereInput | OrderStatusHistoryWhereInput[]
    orderId?: StringFilter<"OrderStatusHistory"> | string
    fromStatus?: StringFilter<"OrderStatusHistory"> | string
    toStatus?: StringFilter<"OrderStatusHistory"> | string
    changedBy?: StringFilter<"OrderStatusHistory"> | string
    message?: StringNullableFilter<"OrderStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"OrderStatusHistory"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderStatusHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrderStatusHistoryCountOrderByAggregateInput
    _max?: OrderStatusHistoryMaxOrderByAggregateInput
    _min?: OrderStatusHistoryMinOrderByAggregateInput
  }

  export type OrderStatusHistoryScalarWhereWithAggregatesInput = {
    AND?: OrderStatusHistoryScalarWhereWithAggregatesInput | OrderStatusHistoryScalarWhereWithAggregatesInput[]
    OR?: OrderStatusHistoryScalarWhereWithAggregatesInput[]
    NOT?: OrderStatusHistoryScalarWhereWithAggregatesInput | OrderStatusHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderStatusHistory"> | string
    orderId?: StringWithAggregatesFilter<"OrderStatusHistory"> | string
    fromStatus?: StringWithAggregatesFilter<"OrderStatusHistory"> | string
    toStatus?: StringWithAggregatesFilter<"OrderStatusHistory"> | string
    changedBy?: StringWithAggregatesFilter<"OrderStatusHistory"> | string
    message?: StringNullableWithAggregatesFilter<"OrderStatusHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrderStatusHistory"> | Date | string
  }

  export type ReviewTokenWhereInput = {
    AND?: ReviewTokenWhereInput | ReviewTokenWhereInput[]
    OR?: ReviewTokenWhereInput[]
    NOT?: ReviewTokenWhereInput | ReviewTokenWhereInput[]
    id?: StringFilter<"ReviewToken"> | string
    orderId?: StringFilter<"ReviewToken"> | string
    tokenHash?: StringFilter<"ReviewToken"> | string
    expiresAt?: DateTimeFilter<"ReviewToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"ReviewToken"> | Date | string | null
    createdAt?: DateTimeFilter<"ReviewToken"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type ReviewTokenOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type ReviewTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    tokenHash?: string
    AND?: ReviewTokenWhereInput | ReviewTokenWhereInput[]
    OR?: ReviewTokenWhereInput[]
    NOT?: ReviewTokenWhereInput | ReviewTokenWhereInput[]
    expiresAt?: DateTimeFilter<"ReviewToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"ReviewToken"> | Date | string | null
    createdAt?: DateTimeFilter<"ReviewToken"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "orderId" | "tokenHash">

  export type ReviewTokenOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewTokenCountOrderByAggregateInput
    _max?: ReviewTokenMaxOrderByAggregateInput
    _min?: ReviewTokenMinOrderByAggregateInput
  }

  export type ReviewTokenScalarWhereWithAggregatesInput = {
    AND?: ReviewTokenScalarWhereWithAggregatesInput | ReviewTokenScalarWhereWithAggregatesInput[]
    OR?: ReviewTokenScalarWhereWithAggregatesInput[]
    NOT?: ReviewTokenScalarWhereWithAggregatesInput | ReviewTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewToken"> | string
    orderId?: StringWithAggregatesFilter<"ReviewToken"> | string
    tokenHash?: StringWithAggregatesFilter<"ReviewToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"ReviewToken"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"ReviewToken"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReviewToken"> | Date | string
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    name?: StringNullableFilter<"AdminUser"> | string | null
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    name?: StringNullableFilter<"AdminUser"> | string | null
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringNullableWithAggregatesFilter<"AdminUser"> | string | null
  }

  export type SiteSettingVersionWhereInput = {
    AND?: SiteSettingVersionWhereInput | SiteSettingVersionWhereInput[]
    OR?: SiteSettingVersionWhereInput[]
    NOT?: SiteSettingVersionWhereInput | SiteSettingVersionWhereInput[]
    version?: IntFilter<"SiteSettingVersion"> | number
    payload?: StringFilter<"SiteSettingVersion"> | string
    changedBy?: StringFilter<"SiteSettingVersion"> | string
    createdAt?: DateTimeFilter<"SiteSettingVersion"> | Date | string
  }

  export type SiteSettingVersionOrderByWithRelationInput = {
    version?: SortOrder
    payload?: SortOrder
    changedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SiteSettingVersionWhereUniqueInput = Prisma.AtLeast<{
    version?: number
    AND?: SiteSettingVersionWhereInput | SiteSettingVersionWhereInput[]
    OR?: SiteSettingVersionWhereInput[]
    NOT?: SiteSettingVersionWhereInput | SiteSettingVersionWhereInput[]
    payload?: StringFilter<"SiteSettingVersion"> | string
    changedBy?: StringFilter<"SiteSettingVersion"> | string
    createdAt?: DateTimeFilter<"SiteSettingVersion"> | Date | string
  }, "version">

  export type SiteSettingVersionOrderByWithAggregationInput = {
    version?: SortOrder
    payload?: SortOrder
    changedBy?: SortOrder
    createdAt?: SortOrder
    _count?: SiteSettingVersionCountOrderByAggregateInput
    _avg?: SiteSettingVersionAvgOrderByAggregateInput
    _max?: SiteSettingVersionMaxOrderByAggregateInput
    _min?: SiteSettingVersionMinOrderByAggregateInput
    _sum?: SiteSettingVersionSumOrderByAggregateInput
  }

  export type SiteSettingVersionScalarWhereWithAggregatesInput = {
    AND?: SiteSettingVersionScalarWhereWithAggregatesInput | SiteSettingVersionScalarWhereWithAggregatesInput[]
    OR?: SiteSettingVersionScalarWhereWithAggregatesInput[]
    NOT?: SiteSettingVersionScalarWhereWithAggregatesInput | SiteSettingVersionScalarWhereWithAggregatesInput[]
    version?: IntWithAggregatesFilter<"SiteSettingVersion"> | number
    payload?: StringWithAggregatesFilter<"SiteSettingVersion"> | string
    changedBy?: StringWithAggregatesFilter<"SiteSettingVersion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SiteSettingVersion"> | Date | string
  }

  export type WorkItemWhereInput = {
    AND?: WorkItemWhereInput | WorkItemWhereInput[]
    OR?: WorkItemWhereInput[]
    NOT?: WorkItemWhereInput | WorkItemWhereInput[]
    id?: StringFilter<"WorkItem"> | string
    title?: StringFilter<"WorkItem"> | string
    artist?: StringNullableFilter<"WorkItem"> | string | null
    role?: StringFilter<"WorkItem"> | string
    embedUrl?: StringFilter<"WorkItem"> | string
    provider?: StringFilter<"WorkItem"> | string
    status?: StringFilter<"WorkItem"> | string
    orderIndex?: IntFilter<"WorkItem"> | number
    createdAt?: DateTimeFilter<"WorkItem"> | Date | string
    updatedAt?: DateTimeFilter<"WorkItem"> | Date | string
  }

  export type WorkItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrderInput | SortOrder
    role?: SortOrder
    embedUrl?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkItemWhereInput | WorkItemWhereInput[]
    OR?: WorkItemWhereInput[]
    NOT?: WorkItemWhereInput | WorkItemWhereInput[]
    title?: StringFilter<"WorkItem"> | string
    artist?: StringNullableFilter<"WorkItem"> | string | null
    role?: StringFilter<"WorkItem"> | string
    embedUrl?: StringFilter<"WorkItem"> | string
    provider?: StringFilter<"WorkItem"> | string
    status?: StringFilter<"WorkItem"> | string
    orderIndex?: IntFilter<"WorkItem"> | number
    createdAt?: DateTimeFilter<"WorkItem"> | Date | string
    updatedAt?: DateTimeFilter<"WorkItem"> | Date | string
  }, "id">

  export type WorkItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrderInput | SortOrder
    role?: SortOrder
    embedUrl?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkItemCountOrderByAggregateInput
    _avg?: WorkItemAvgOrderByAggregateInput
    _max?: WorkItemMaxOrderByAggregateInput
    _min?: WorkItemMinOrderByAggregateInput
    _sum?: WorkItemSumOrderByAggregateInput
  }

  export type WorkItemScalarWhereWithAggregatesInput = {
    AND?: WorkItemScalarWhereWithAggregatesInput | WorkItemScalarWhereWithAggregatesInput[]
    OR?: WorkItemScalarWhereWithAggregatesInput[]
    NOT?: WorkItemScalarWhereWithAggregatesInput | WorkItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkItem"> | string
    title?: StringWithAggregatesFilter<"WorkItem"> | string
    artist?: StringNullableWithAggregatesFilter<"WorkItem"> | string | null
    role?: StringWithAggregatesFilter<"WorkItem"> | string
    embedUrl?: StringWithAggregatesFilter<"WorkItem"> | string
    provider?: StringWithAggregatesFilter<"WorkItem"> | string
    status?: StringWithAggregatesFilter<"WorkItem"> | string
    orderIndex?: IntWithAggregatesFilter<"WorkItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkItem"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    adminEmail?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    entityId?: SortOrderInput | SortOrder
    adminEmail?: SortOrder
    details?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    adminEmail?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    entityId?: SortOrderInput | SortOrder
    adminEmail?: SortOrder
    details?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    adminEmail?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type DevEmailWhereInput = {
    AND?: DevEmailWhereInput | DevEmailWhereInput[]
    OR?: DevEmailWhereInput[]
    NOT?: DevEmailWhereInput | DevEmailWhereInput[]
    id?: StringFilter<"DevEmail"> | string
    toAddress?: StringFilter<"DevEmail"> | string
    subject?: StringFilter<"DevEmail"> | string
    htmlBody?: StringFilter<"DevEmail"> | string
    textBody?: StringNullableFilter<"DevEmail"> | string | null
    sentAt?: DateTimeFilter<"DevEmail"> | Date | string
  }

  export type DevEmailOrderByWithRelationInput = {
    id?: SortOrder
    toAddress?: SortOrder
    subject?: SortOrder
    htmlBody?: SortOrder
    textBody?: SortOrderInput | SortOrder
    sentAt?: SortOrder
  }

  export type DevEmailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DevEmailWhereInput | DevEmailWhereInput[]
    OR?: DevEmailWhereInput[]
    NOT?: DevEmailWhereInput | DevEmailWhereInput[]
    toAddress?: StringFilter<"DevEmail"> | string
    subject?: StringFilter<"DevEmail"> | string
    htmlBody?: StringFilter<"DevEmail"> | string
    textBody?: StringNullableFilter<"DevEmail"> | string | null
    sentAt?: DateTimeFilter<"DevEmail"> | Date | string
  }, "id">

  export type DevEmailOrderByWithAggregationInput = {
    id?: SortOrder
    toAddress?: SortOrder
    subject?: SortOrder
    htmlBody?: SortOrder
    textBody?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    _count?: DevEmailCountOrderByAggregateInput
    _max?: DevEmailMaxOrderByAggregateInput
    _min?: DevEmailMinOrderByAggregateInput
  }

  export type DevEmailScalarWhereWithAggregatesInput = {
    AND?: DevEmailScalarWhereWithAggregatesInput | DevEmailScalarWhereWithAggregatesInput[]
    OR?: DevEmailScalarWhereWithAggregatesInput[]
    NOT?: DevEmailScalarWhereWithAggregatesInput | DevEmailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DevEmail"> | string
    toAddress?: StringWithAggregatesFilter<"DevEmail"> | string
    subject?: StringWithAggregatesFilter<"DevEmail"> | string
    htmlBody?: StringWithAggregatesFilter<"DevEmail"> | string
    textBody?: StringNullableWithAggregatesFilter<"DevEmail"> | string | null
    sentAt?: DateTimeWithAggregatesFilter<"DevEmail"> | Date | string
  }

  export type EmailEventWhereInput = {
    AND?: EmailEventWhereInput | EmailEventWhereInput[]
    OR?: EmailEventWhereInput[]
    NOT?: EmailEventWhereInput | EmailEventWhereInput[]
    id?: StringFilter<"EmailEvent"> | string
    timestamp?: DateTimeFilter<"EmailEvent"> | Date | string
    eventTemplate?: StringNullableFilter<"EmailEvent"> | string | null
    orderId?: StringNullableFilter<"EmailEvent"> | string | null
    intendedCount?: IntFilter<"EmailEvent"> | number
    intendedTo?: StringFilter<"EmailEvent"> | string
    actualTo?: StringFilter<"EmailEvent"> | string
    subject?: StringFilter<"EmailEvent"> | string
    status?: StringFilter<"EmailEvent"> | string
    errorCode?: StringNullableFilter<"EmailEvent"> | string | null
    errorSummary?: StringNullableFilter<"EmailEvent"> | string | null
    requestId?: StringNullableFilter<"EmailEvent"> | string | null
  }

  export type EmailEventOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventTemplate?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    intendedCount?: SortOrder
    intendedTo?: SortOrder
    actualTo?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    errorCode?: SortOrderInput | SortOrder
    errorSummary?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
  }

  export type EmailEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailEventWhereInput | EmailEventWhereInput[]
    OR?: EmailEventWhereInput[]
    NOT?: EmailEventWhereInput | EmailEventWhereInput[]
    timestamp?: DateTimeFilter<"EmailEvent"> | Date | string
    eventTemplate?: StringNullableFilter<"EmailEvent"> | string | null
    orderId?: StringNullableFilter<"EmailEvent"> | string | null
    intendedCount?: IntFilter<"EmailEvent"> | number
    intendedTo?: StringFilter<"EmailEvent"> | string
    actualTo?: StringFilter<"EmailEvent"> | string
    subject?: StringFilter<"EmailEvent"> | string
    status?: StringFilter<"EmailEvent"> | string
    errorCode?: StringNullableFilter<"EmailEvent"> | string | null
    errorSummary?: StringNullableFilter<"EmailEvent"> | string | null
    requestId?: StringNullableFilter<"EmailEvent"> | string | null
  }, "id">

  export type EmailEventOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventTemplate?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    intendedCount?: SortOrder
    intendedTo?: SortOrder
    actualTo?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    errorCode?: SortOrderInput | SortOrder
    errorSummary?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    _count?: EmailEventCountOrderByAggregateInput
    _avg?: EmailEventAvgOrderByAggregateInput
    _max?: EmailEventMaxOrderByAggregateInput
    _min?: EmailEventMinOrderByAggregateInput
    _sum?: EmailEventSumOrderByAggregateInput
  }

  export type EmailEventScalarWhereWithAggregatesInput = {
    AND?: EmailEventScalarWhereWithAggregatesInput | EmailEventScalarWhereWithAggregatesInput[]
    OR?: EmailEventScalarWhereWithAggregatesInput[]
    NOT?: EmailEventScalarWhereWithAggregatesInput | EmailEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"EmailEvent"> | Date | string
    eventTemplate?: StringNullableWithAggregatesFilter<"EmailEvent"> | string | null
    orderId?: StringNullableWithAggregatesFilter<"EmailEvent"> | string | null
    intendedCount?: IntWithAggregatesFilter<"EmailEvent"> | number
    intendedTo?: StringWithAggregatesFilter<"EmailEvent"> | string
    actualTo?: StringWithAggregatesFilter<"EmailEvent"> | string
    subject?: StringWithAggregatesFilter<"EmailEvent"> | string
    status?: StringWithAggregatesFilter<"EmailEvent"> | string
    errorCode?: StringNullableWithAggregatesFilter<"EmailEvent"> | string | null
    errorSummary?: StringNullableWithAggregatesFilter<"EmailEvent"> | string | null
    requestId?: StringNullableWithAggregatesFilter<"EmailEvent"> | string | null
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    title?: string | null
    comment: string
    displayName: string
    email: string
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: OrderCreateNestedOneWithoutReviewInput
    reply?: AdminReplyCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    title?: string | null
    comment: string
    displayName: string
    email: string
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId?: string | null
    reply?: AdminReplyUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneWithoutReviewNestedInput
    reply?: AdminReplyUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: AdminReplyUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating: number
    title?: string | null
    comment: string
    displayName: string
    email: string
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId?: string | null
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminReplyCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    review: ReviewCreateNestedOneWithoutReplyInput
  }

  export type AdminReplyUncheckedCreateInput = {
    id?: string
    content: string
    reviewId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminReplyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutReplyNestedInput
  }

  export type AdminReplyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminReplyCreateManyInput = {
    id?: string
    content: string
    reviewId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminReplyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminReplyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    publicId: string
    customerName: string
    customerEmail: string
    serviceType: string
    genre?: string | null
    message?: string | null
    numSongs?: number | null
    songLength?: string | null
    numStems?: number | null
    status?: string
    driveLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: OrderStatusHistoryCreateNestedManyWithoutOrderInput
    reviewToken?: ReviewTokenCreateNestedOneWithoutOrderInput
    review?: ReviewCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    publicId: string
    customerName: string
    customerEmail: string
    serviceType: string
    genre?: string | null
    message?: string | null
    numSongs?: number | null
    songLength?: string | null
    numStems?: number | null
    status?: string
    driveLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput
    reviewToken?: ReviewTokenUncheckedCreateNestedOneWithoutOrderInput
    review?: ReviewUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    numSongs?: NullableIntFieldUpdateOperationsInput | number | null
    songLength?: NullableStringFieldUpdateOperationsInput | string | null
    numStems?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    driveLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: OrderStatusHistoryUpdateManyWithoutOrderNestedInput
    reviewToken?: ReviewTokenUpdateOneWithoutOrderNestedInput
    review?: ReviewUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    numSongs?: NullableIntFieldUpdateOperationsInput | number | null
    songLength?: NullableStringFieldUpdateOperationsInput | string | null
    numStems?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    driveLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput
    reviewToken?: ReviewTokenUncheckedUpdateOneWithoutOrderNestedInput
    review?: ReviewUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    publicId: string
    customerName: string
    customerEmail: string
    serviceType: string
    genre?: string | null
    message?: string | null
    numSongs?: number | null
    songLength?: string | null
    numStems?: number | null
    status?: string
    driveLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    numSongs?: NullableIntFieldUpdateOperationsInput | number | null
    songLength?: NullableStringFieldUpdateOperationsInput | string | null
    numStems?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    driveLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    numSongs?: NullableIntFieldUpdateOperationsInput | number | null
    songLength?: NullableStringFieldUpdateOperationsInput | string | null
    numStems?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    driveLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusHistoryCreateInput = {
    id?: string
    fromStatus: string
    toStatus: string
    changedBy: string
    message?: string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutStatusHistoryInput
  }

  export type OrderStatusHistoryUncheckedCreateInput = {
    id?: string
    orderId: string
    fromStatus: string
    toStatus: string
    changedBy: string
    message?: string | null
    createdAt?: Date | string
  }

  export type OrderStatusHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutStatusHistoryNestedInput
  }

  export type OrderStatusHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusHistoryCreateManyInput = {
    id?: string
    orderId: string
    fromStatus: string
    toStatus: string
    changedBy: string
    message?: string | null
    createdAt?: Date | string
  }

  export type OrderStatusHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewTokenCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutReviewTokenInput
  }

  export type ReviewTokenUncheckedCreateInput = {
    id?: string
    orderId: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReviewTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutReviewTokenNestedInput
  }

  export type ReviewTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewTokenCreateManyInput = {
    id?: string
    orderId: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReviewTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    email: string
    name?: string | null
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SiteSettingVersionCreateInput = {
    payload: string
    changedBy: string
    createdAt?: Date | string
  }

  export type SiteSettingVersionUncheckedCreateInput = {
    version?: number
    payload: string
    changedBy: string
    createdAt?: Date | string
  }

  export type SiteSettingVersionUpdateInput = {
    payload?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingVersionUncheckedUpdateInput = {
    version?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingVersionCreateManyInput = {
    version?: number
    payload: string
    changedBy: string
    createdAt?: Date | string
  }

  export type SiteSettingVersionUpdateManyMutationInput = {
    payload?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingVersionUncheckedUpdateManyInput = {
    version?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemCreateInput = {
    id?: string
    title: string
    artist?: string | null
    role: string
    embedUrl: string
    provider: string
    status?: string
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkItemUncheckedCreateInput = {
    id?: string
    title: string
    artist?: string | null
    role: string
    embedUrl: string
    provider: string
    status?: string
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    embedUrl?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    embedUrl?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemCreateManyInput = {
    id?: string
    title: string
    artist?: string | null
    role: string
    embedUrl: string
    provider: string
    status?: string
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    embedUrl?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    embedUrl?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entityId?: string | null
    adminEmail: string
    details?: string | null
    timestamp?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    entityId?: string | null
    adminEmail: string
    details?: string | null
    timestamp?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    adminEmail?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    adminEmail?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    entityId?: string | null
    adminEmail: string
    details?: string | null
    timestamp?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    adminEmail?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    adminEmail?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevEmailCreateInput = {
    id?: string
    toAddress: string
    subject: string
    htmlBody: string
    textBody?: string | null
    sentAt?: Date | string
  }

  export type DevEmailUncheckedCreateInput = {
    id?: string
    toAddress: string
    subject: string
    htmlBody: string
    textBody?: string | null
    sentAt?: Date | string
  }

  export type DevEmailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    htmlBody?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevEmailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    htmlBody?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevEmailCreateManyInput = {
    id?: string
    toAddress: string
    subject: string
    htmlBody: string
    textBody?: string | null
    sentAt?: Date | string
  }

  export type DevEmailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    htmlBody?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevEmailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    toAddress?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    htmlBody?: StringFieldUpdateOperationsInput | string
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailEventCreateInput = {
    id?: string
    timestamp?: Date | string
    eventTemplate?: string | null
    orderId?: string | null
    intendedCount?: number
    intendedTo: string
    actualTo: string
    subject: string
    status: string
    errorCode?: string | null
    errorSummary?: string | null
    requestId?: string | null
  }

  export type EmailEventUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    eventTemplate?: string | null
    orderId?: string | null
    intendedCount?: number
    intendedTo: string
    actualTo: string
    subject: string
    status: string
    errorCode?: string | null
    errorSummary?: string | null
    requestId?: string | null
  }

  export type EmailEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    intendedCount?: IntFieldUpdateOperationsInput | number
    intendedTo?: StringFieldUpdateOperationsInput | string
    actualTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorSummary?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    intendedCount?: IntFieldUpdateOperationsInput | number
    intendedTo?: StringFieldUpdateOperationsInput | string
    actualTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorSummary?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailEventCreateManyInput = {
    id?: string
    timestamp?: Date | string
    eventTemplate?: string | null
    orderId?: string | null
    intendedCount?: number
    intendedTo: string
    actualTo: string
    subject: string
    status: string
    errorCode?: string | null
    errorSummary?: string | null
    requestId?: string | null
  }

  export type EmailEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    intendedCount?: IntFieldUpdateOperationsInput | number
    intendedTo?: StringFieldUpdateOperationsInput | string
    actualTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorSummary?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    intendedCount?: IntFieldUpdateOperationsInput | number
    intendedTo?: StringFieldUpdateOperationsInput | string
    actualTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorSummary?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type AdminReplyNullableScalarRelationFilter = {
    is?: AdminReplyWhereInput | null
    isNot?: AdminReplyWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type AdminReplyCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminReplyMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrderStatusHistoryListRelationFilter = {
    every?: OrderStatusHistoryWhereInput
    some?: OrderStatusHistoryWhereInput
    none?: OrderStatusHistoryWhereInput
  }

  export type ReviewTokenNullableScalarRelationFilter = {
    is?: ReviewTokenWhereInput | null
    isNot?: ReviewTokenWhereInput | null
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type OrderStatusHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    serviceType?: SortOrder
    genre?: SortOrder
    message?: SortOrder
    numSongs?: SortOrder
    songLength?: SortOrder
    numStems?: SortOrder
    status?: SortOrder
    driveLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    numSongs?: SortOrder
    numStems?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    serviceType?: SortOrder
    genre?: SortOrder
    message?: SortOrder
    numSongs?: SortOrder
    songLength?: SortOrder
    numStems?: SortOrder
    status?: SortOrder
    driveLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    serviceType?: SortOrder
    genre?: SortOrder
    message?: SortOrder
    numSongs?: SortOrder
    songLength?: SortOrder
    numStems?: SortOrder
    status?: SortOrder
    driveLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    numSongs?: SortOrder
    numStems?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderStatusHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderStatusHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderStatusHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReviewTokenCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewTokenMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type SiteSettingVersionCountOrderByAggregateInput = {
    version?: SortOrder
    payload?: SortOrder
    changedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SiteSettingVersionAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type SiteSettingVersionMaxOrderByAggregateInput = {
    version?: SortOrder
    payload?: SortOrder
    changedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SiteSettingVersionMinOrderByAggregateInput = {
    version?: SortOrder
    payload?: SortOrder
    changedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SiteSettingVersionSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type WorkItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    role?: SortOrder
    embedUrl?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkItemAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type WorkItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    role?: SortOrder
    embedUrl?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    role?: SortOrder
    embedUrl?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkItemSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    adminEmail?: SortOrder
    details?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    adminEmail?: SortOrder
    details?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    adminEmail?: SortOrder
    details?: SortOrder
    timestamp?: SortOrder
  }

  export type DevEmailCountOrderByAggregateInput = {
    id?: SortOrder
    toAddress?: SortOrder
    subject?: SortOrder
    htmlBody?: SortOrder
    textBody?: SortOrder
    sentAt?: SortOrder
  }

  export type DevEmailMaxOrderByAggregateInput = {
    id?: SortOrder
    toAddress?: SortOrder
    subject?: SortOrder
    htmlBody?: SortOrder
    textBody?: SortOrder
    sentAt?: SortOrder
  }

  export type DevEmailMinOrderByAggregateInput = {
    id?: SortOrder
    toAddress?: SortOrder
    subject?: SortOrder
    htmlBody?: SortOrder
    textBody?: SortOrder
    sentAt?: SortOrder
  }

  export type EmailEventCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventTemplate?: SortOrder
    orderId?: SortOrder
    intendedCount?: SortOrder
    intendedTo?: SortOrder
    actualTo?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    errorSummary?: SortOrder
    requestId?: SortOrder
  }

  export type EmailEventAvgOrderByAggregateInput = {
    intendedCount?: SortOrder
  }

  export type EmailEventMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventTemplate?: SortOrder
    orderId?: SortOrder
    intendedCount?: SortOrder
    intendedTo?: SortOrder
    actualTo?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    errorSummary?: SortOrder
    requestId?: SortOrder
  }

  export type EmailEventMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventTemplate?: SortOrder
    orderId?: SortOrder
    intendedCount?: SortOrder
    intendedTo?: SortOrder
    actualTo?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    errorSummary?: SortOrder
    requestId?: SortOrder
  }

  export type EmailEventSumOrderByAggregateInput = {
    intendedCount?: SortOrder
  }

  export type OrderCreateNestedOneWithoutReviewInput = {
    create?: XOR<OrderCreateWithoutReviewInput, OrderUncheckedCreateWithoutReviewInput>
    connectOrCreate?: OrderCreateOrConnectWithoutReviewInput
    connect?: OrderWhereUniqueInput
  }

  export type AdminReplyCreateNestedOneWithoutReviewInput = {
    create?: XOR<AdminReplyCreateWithoutReviewInput, AdminReplyUncheckedCreateWithoutReviewInput>
    connectOrCreate?: AdminReplyCreateOrConnectWithoutReviewInput
    connect?: AdminReplyWhereUniqueInput
  }

  export type AdminReplyUncheckedCreateNestedOneWithoutReviewInput = {
    create?: XOR<AdminReplyCreateWithoutReviewInput, AdminReplyUncheckedCreateWithoutReviewInput>
    connectOrCreate?: AdminReplyCreateOrConnectWithoutReviewInput
    connect?: AdminReplyWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateOneWithoutReviewNestedInput = {
    create?: XOR<OrderCreateWithoutReviewInput, OrderUncheckedCreateWithoutReviewInput>
    connectOrCreate?: OrderCreateOrConnectWithoutReviewInput
    upsert?: OrderUpsertWithoutReviewInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutReviewInput, OrderUpdateWithoutReviewInput>, OrderUncheckedUpdateWithoutReviewInput>
  }

  export type AdminReplyUpdateOneWithoutReviewNestedInput = {
    create?: XOR<AdminReplyCreateWithoutReviewInput, AdminReplyUncheckedCreateWithoutReviewInput>
    connectOrCreate?: AdminReplyCreateOrConnectWithoutReviewInput
    upsert?: AdminReplyUpsertWithoutReviewInput
    disconnect?: AdminReplyWhereInput | boolean
    delete?: AdminReplyWhereInput | boolean
    connect?: AdminReplyWhereUniqueInput
    update?: XOR<XOR<AdminReplyUpdateToOneWithWhereWithoutReviewInput, AdminReplyUpdateWithoutReviewInput>, AdminReplyUncheckedUpdateWithoutReviewInput>
  }

  export type AdminReplyUncheckedUpdateOneWithoutReviewNestedInput = {
    create?: XOR<AdminReplyCreateWithoutReviewInput, AdminReplyUncheckedCreateWithoutReviewInput>
    connectOrCreate?: AdminReplyCreateOrConnectWithoutReviewInput
    upsert?: AdminReplyUpsertWithoutReviewInput
    disconnect?: AdminReplyWhereInput | boolean
    delete?: AdminReplyWhereInput | boolean
    connect?: AdminReplyWhereUniqueInput
    update?: XOR<XOR<AdminReplyUpdateToOneWithWhereWithoutReviewInput, AdminReplyUpdateWithoutReviewInput>, AdminReplyUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewCreateNestedOneWithoutReplyInput = {
    create?: XOR<ReviewCreateWithoutReplyInput, ReviewUncheckedCreateWithoutReplyInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutReplyInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutReplyNestedInput = {
    create?: XOR<ReviewCreateWithoutReplyInput, ReviewUncheckedCreateWithoutReplyInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutReplyInput
    upsert?: ReviewUpsertWithoutReplyInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutReplyInput, ReviewUpdateWithoutReplyInput>, ReviewUncheckedUpdateWithoutReplyInput>
  }

  export type OrderStatusHistoryCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderStatusHistoryCreateWithoutOrderInput, OrderStatusHistoryUncheckedCreateWithoutOrderInput> | OrderStatusHistoryCreateWithoutOrderInput[] | OrderStatusHistoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderStatusHistoryCreateOrConnectWithoutOrderInput | OrderStatusHistoryCreateOrConnectWithoutOrderInput[]
    createMany?: OrderStatusHistoryCreateManyOrderInputEnvelope
    connect?: OrderStatusHistoryWhereUniqueInput | OrderStatusHistoryWhereUniqueInput[]
  }

  export type ReviewTokenCreateNestedOneWithoutOrderInput = {
    create?: XOR<ReviewTokenCreateWithoutOrderInput, ReviewTokenUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ReviewTokenCreateOrConnectWithoutOrderInput
    connect?: ReviewTokenWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutOrderInput = {
    create?: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutOrderInput
    connect?: ReviewWhereUniqueInput
  }

  export type OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderStatusHistoryCreateWithoutOrderInput, OrderStatusHistoryUncheckedCreateWithoutOrderInput> | OrderStatusHistoryCreateWithoutOrderInput[] | OrderStatusHistoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderStatusHistoryCreateOrConnectWithoutOrderInput | OrderStatusHistoryCreateOrConnectWithoutOrderInput[]
    createMany?: OrderStatusHistoryCreateManyOrderInputEnvelope
    connect?: OrderStatusHistoryWhereUniqueInput | OrderStatusHistoryWhereUniqueInput[]
  }

  export type ReviewTokenUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<ReviewTokenCreateWithoutOrderInput, ReviewTokenUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ReviewTokenCreateOrConnectWithoutOrderInput
    connect?: ReviewTokenWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutOrderInput
    connect?: ReviewWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderStatusHistoryUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderStatusHistoryCreateWithoutOrderInput, OrderStatusHistoryUncheckedCreateWithoutOrderInput> | OrderStatusHistoryCreateWithoutOrderInput[] | OrderStatusHistoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderStatusHistoryCreateOrConnectWithoutOrderInput | OrderStatusHistoryCreateOrConnectWithoutOrderInput[]
    upsert?: OrderStatusHistoryUpsertWithWhereUniqueWithoutOrderInput | OrderStatusHistoryUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderStatusHistoryCreateManyOrderInputEnvelope
    set?: OrderStatusHistoryWhereUniqueInput | OrderStatusHistoryWhereUniqueInput[]
    disconnect?: OrderStatusHistoryWhereUniqueInput | OrderStatusHistoryWhereUniqueInput[]
    delete?: OrderStatusHistoryWhereUniqueInput | OrderStatusHistoryWhereUniqueInput[]
    connect?: OrderStatusHistoryWhereUniqueInput | OrderStatusHistoryWhereUniqueInput[]
    update?: OrderStatusHistoryUpdateWithWhereUniqueWithoutOrderInput | OrderStatusHistoryUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderStatusHistoryUpdateManyWithWhereWithoutOrderInput | OrderStatusHistoryUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderStatusHistoryScalarWhereInput | OrderStatusHistoryScalarWhereInput[]
  }

  export type ReviewTokenUpdateOneWithoutOrderNestedInput = {
    create?: XOR<ReviewTokenCreateWithoutOrderInput, ReviewTokenUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ReviewTokenCreateOrConnectWithoutOrderInput
    upsert?: ReviewTokenUpsertWithoutOrderInput
    disconnect?: ReviewTokenWhereInput | boolean
    delete?: ReviewTokenWhereInput | boolean
    connect?: ReviewTokenWhereUniqueInput
    update?: XOR<XOR<ReviewTokenUpdateToOneWithWhereWithoutOrderInput, ReviewTokenUpdateWithoutOrderInput>, ReviewTokenUncheckedUpdateWithoutOrderInput>
  }

  export type ReviewUpdateOneWithoutOrderNestedInput = {
    create?: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutOrderInput
    upsert?: ReviewUpsertWithoutOrderInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutOrderInput, ReviewUpdateWithoutOrderInput>, ReviewUncheckedUpdateWithoutOrderInput>
  }

  export type OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderStatusHistoryCreateWithoutOrderInput, OrderStatusHistoryUncheckedCreateWithoutOrderInput> | OrderStatusHistoryCreateWithoutOrderInput[] | OrderStatusHistoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderStatusHistoryCreateOrConnectWithoutOrderInput | OrderStatusHistoryCreateOrConnectWithoutOrderInput[]
    upsert?: OrderStatusHistoryUpsertWithWhereUniqueWithoutOrderInput | OrderStatusHistoryUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderStatusHistoryCreateManyOrderInputEnvelope
    set?: OrderStatusHistoryWhereUniqueInput | OrderStatusHistoryWhereUniqueInput[]
    disconnect?: OrderStatusHistoryWhereUniqueInput | OrderStatusHistoryWhereUniqueInput[]
    delete?: OrderStatusHistoryWhereUniqueInput | OrderStatusHistoryWhereUniqueInput[]
    connect?: OrderStatusHistoryWhereUniqueInput | OrderStatusHistoryWhereUniqueInput[]
    update?: OrderStatusHistoryUpdateWithWhereUniqueWithoutOrderInput | OrderStatusHistoryUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderStatusHistoryUpdateManyWithWhereWithoutOrderInput | OrderStatusHistoryUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderStatusHistoryScalarWhereInput | OrderStatusHistoryScalarWhereInput[]
  }

  export type ReviewTokenUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<ReviewTokenCreateWithoutOrderInput, ReviewTokenUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ReviewTokenCreateOrConnectWithoutOrderInput
    upsert?: ReviewTokenUpsertWithoutOrderInput
    disconnect?: ReviewTokenWhereInput | boolean
    delete?: ReviewTokenWhereInput | boolean
    connect?: ReviewTokenWhereUniqueInput
    update?: XOR<XOR<ReviewTokenUpdateToOneWithWhereWithoutOrderInput, ReviewTokenUpdateWithoutOrderInput>, ReviewTokenUncheckedUpdateWithoutOrderInput>
  }

  export type ReviewUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutOrderInput
    upsert?: ReviewUpsertWithoutOrderInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutOrderInput, ReviewUpdateWithoutOrderInput>, ReviewUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutStatusHistoryInput = {
    create?: XOR<OrderCreateWithoutStatusHistoryInput, OrderUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: OrderCreateOrConnectWithoutStatusHistoryInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: XOR<OrderCreateWithoutStatusHistoryInput, OrderUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: OrderCreateOrConnectWithoutStatusHistoryInput
    upsert?: OrderUpsertWithoutStatusHistoryInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutStatusHistoryInput, OrderUpdateWithoutStatusHistoryInput>, OrderUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type OrderCreateNestedOneWithoutReviewTokenInput = {
    create?: XOR<OrderCreateWithoutReviewTokenInput, OrderUncheckedCreateWithoutReviewTokenInput>
    connectOrCreate?: OrderCreateOrConnectWithoutReviewTokenInput
    connect?: OrderWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrderUpdateOneRequiredWithoutReviewTokenNestedInput = {
    create?: XOR<OrderCreateWithoutReviewTokenInput, OrderUncheckedCreateWithoutReviewTokenInput>
    connectOrCreate?: OrderCreateOrConnectWithoutReviewTokenInput
    upsert?: OrderUpsertWithoutReviewTokenInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutReviewTokenInput, OrderUpdateWithoutReviewTokenInput>, OrderUncheckedUpdateWithoutReviewTokenInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrderCreateWithoutReviewInput = {
    id?: string
    publicId: string
    customerName: string
    customerEmail: string
    serviceType: string
    genre?: string | null
    message?: string | null
    numSongs?: number | null
    songLength?: string | null
    numStems?: number | null
    status?: string
    driveLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: OrderStatusHistoryCreateNestedManyWithoutOrderInput
    reviewToken?: ReviewTokenCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutReviewInput = {
    id?: string
    publicId: string
    customerName: string
    customerEmail: string
    serviceType: string
    genre?: string | null
    message?: string | null
    numSongs?: number | null
    songLength?: string | null
    numStems?: number | null
    status?: string
    driveLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput
    reviewToken?: ReviewTokenUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutReviewInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutReviewInput, OrderUncheckedCreateWithoutReviewInput>
  }

  export type AdminReplyCreateWithoutReviewInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminReplyUncheckedCreateWithoutReviewInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminReplyCreateOrConnectWithoutReviewInput = {
    where: AdminReplyWhereUniqueInput
    create: XOR<AdminReplyCreateWithoutReviewInput, AdminReplyUncheckedCreateWithoutReviewInput>
  }

  export type OrderUpsertWithoutReviewInput = {
    update: XOR<OrderUpdateWithoutReviewInput, OrderUncheckedUpdateWithoutReviewInput>
    create: XOR<OrderCreateWithoutReviewInput, OrderUncheckedCreateWithoutReviewInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutReviewInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutReviewInput, OrderUncheckedUpdateWithoutReviewInput>
  }

  export type OrderUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    numSongs?: NullableIntFieldUpdateOperationsInput | number | null
    songLength?: NullableStringFieldUpdateOperationsInput | string | null
    numStems?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    driveLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: OrderStatusHistoryUpdateManyWithoutOrderNestedInput
    reviewToken?: ReviewTokenUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    numSongs?: NullableIntFieldUpdateOperationsInput | number | null
    songLength?: NullableStringFieldUpdateOperationsInput | string | null
    numStems?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    driveLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput
    reviewToken?: ReviewTokenUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type AdminReplyUpsertWithoutReviewInput = {
    update: XOR<AdminReplyUpdateWithoutReviewInput, AdminReplyUncheckedUpdateWithoutReviewInput>
    create: XOR<AdminReplyCreateWithoutReviewInput, AdminReplyUncheckedCreateWithoutReviewInput>
    where?: AdminReplyWhereInput
  }

  export type AdminReplyUpdateToOneWithWhereWithoutReviewInput = {
    where?: AdminReplyWhereInput
    data: XOR<AdminReplyUpdateWithoutReviewInput, AdminReplyUncheckedUpdateWithoutReviewInput>
  }

  export type AdminReplyUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminReplyUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateWithoutReplyInput = {
    id?: string
    rating: number
    title?: string | null
    comment: string
    displayName: string
    email: string
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: OrderCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutReplyInput = {
    id?: string
    rating: number
    title?: string | null
    comment: string
    displayName: string
    email: string
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId?: string | null
  }

  export type ReviewCreateOrConnectWithoutReplyInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReplyInput, ReviewUncheckedCreateWithoutReplyInput>
  }

  export type ReviewUpsertWithoutReplyInput = {
    update: XOR<ReviewUpdateWithoutReplyInput, ReviewUncheckedUpdateWithoutReplyInput>
    create: XOR<ReviewCreateWithoutReplyInput, ReviewUncheckedCreateWithoutReplyInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutReplyInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutReplyInput, ReviewUncheckedUpdateWithoutReplyInput>
  }

  export type ReviewUpdateWithoutReplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderStatusHistoryCreateWithoutOrderInput = {
    id?: string
    fromStatus: string
    toStatus: string
    changedBy: string
    message?: string | null
    createdAt?: Date | string
  }

  export type OrderStatusHistoryUncheckedCreateWithoutOrderInput = {
    id?: string
    fromStatus: string
    toStatus: string
    changedBy: string
    message?: string | null
    createdAt?: Date | string
  }

  export type OrderStatusHistoryCreateOrConnectWithoutOrderInput = {
    where: OrderStatusHistoryWhereUniqueInput
    create: XOR<OrderStatusHistoryCreateWithoutOrderInput, OrderStatusHistoryUncheckedCreateWithoutOrderInput>
  }

  export type OrderStatusHistoryCreateManyOrderInputEnvelope = {
    data: OrderStatusHistoryCreateManyOrderInput | OrderStatusHistoryCreateManyOrderInput[]
  }

  export type ReviewTokenCreateWithoutOrderInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReviewTokenUncheckedCreateWithoutOrderInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReviewTokenCreateOrConnectWithoutOrderInput = {
    where: ReviewTokenWhereUniqueInput
    create: XOR<ReviewTokenCreateWithoutOrderInput, ReviewTokenUncheckedCreateWithoutOrderInput>
  }

  export type ReviewCreateWithoutOrderInput = {
    id?: string
    rating: number
    title?: string | null
    comment: string
    displayName: string
    email: string
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reply?: AdminReplyCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutOrderInput = {
    id?: string
    rating: number
    title?: string | null
    comment: string
    displayName: string
    email: string
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reply?: AdminReplyUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutOrderInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
  }

  export type OrderStatusHistoryUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderStatusHistoryWhereUniqueInput
    update: XOR<OrderStatusHistoryUpdateWithoutOrderInput, OrderStatusHistoryUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderStatusHistoryCreateWithoutOrderInput, OrderStatusHistoryUncheckedCreateWithoutOrderInput>
  }

  export type OrderStatusHistoryUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderStatusHistoryWhereUniqueInput
    data: XOR<OrderStatusHistoryUpdateWithoutOrderInput, OrderStatusHistoryUncheckedUpdateWithoutOrderInput>
  }

  export type OrderStatusHistoryUpdateManyWithWhereWithoutOrderInput = {
    where: OrderStatusHistoryScalarWhereInput
    data: XOR<OrderStatusHistoryUpdateManyMutationInput, OrderStatusHistoryUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderStatusHistoryScalarWhereInput = {
    AND?: OrderStatusHistoryScalarWhereInput | OrderStatusHistoryScalarWhereInput[]
    OR?: OrderStatusHistoryScalarWhereInput[]
    NOT?: OrderStatusHistoryScalarWhereInput | OrderStatusHistoryScalarWhereInput[]
    id?: StringFilter<"OrderStatusHistory"> | string
    orderId?: StringFilter<"OrderStatusHistory"> | string
    fromStatus?: StringFilter<"OrderStatusHistory"> | string
    toStatus?: StringFilter<"OrderStatusHistory"> | string
    changedBy?: StringFilter<"OrderStatusHistory"> | string
    message?: StringNullableFilter<"OrderStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"OrderStatusHistory"> | Date | string
  }

  export type ReviewTokenUpsertWithoutOrderInput = {
    update: XOR<ReviewTokenUpdateWithoutOrderInput, ReviewTokenUncheckedUpdateWithoutOrderInput>
    create: XOR<ReviewTokenCreateWithoutOrderInput, ReviewTokenUncheckedCreateWithoutOrderInput>
    where?: ReviewTokenWhereInput
  }

  export type ReviewTokenUpdateToOneWithWhereWithoutOrderInput = {
    where?: ReviewTokenWhereInput
    data: XOR<ReviewTokenUpdateWithoutOrderInput, ReviewTokenUncheckedUpdateWithoutOrderInput>
  }

  export type ReviewTokenUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewTokenUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpsertWithoutOrderInput = {
    update: XOR<ReviewUpdateWithoutOrderInput, ReviewUncheckedUpdateWithoutOrderInput>
    create: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutOrderInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutOrderInput, ReviewUncheckedUpdateWithoutOrderInput>
  }

  export type ReviewUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: AdminReplyUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: AdminReplyUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type OrderCreateWithoutStatusHistoryInput = {
    id?: string
    publicId: string
    customerName: string
    customerEmail: string
    serviceType: string
    genre?: string | null
    message?: string | null
    numSongs?: number | null
    songLength?: string | null
    numStems?: number | null
    status?: string
    driveLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewToken?: ReviewTokenCreateNestedOneWithoutOrderInput
    review?: ReviewCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutStatusHistoryInput = {
    id?: string
    publicId: string
    customerName: string
    customerEmail: string
    serviceType: string
    genre?: string | null
    message?: string | null
    numSongs?: number | null
    songLength?: string | null
    numStems?: number | null
    status?: string
    driveLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewToken?: ReviewTokenUncheckedCreateNestedOneWithoutOrderInput
    review?: ReviewUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutStatusHistoryInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutStatusHistoryInput, OrderUncheckedCreateWithoutStatusHistoryInput>
  }

  export type OrderUpsertWithoutStatusHistoryInput = {
    update: XOR<OrderUpdateWithoutStatusHistoryInput, OrderUncheckedUpdateWithoutStatusHistoryInput>
    create: XOR<OrderCreateWithoutStatusHistoryInput, OrderUncheckedCreateWithoutStatusHistoryInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutStatusHistoryInput, OrderUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type OrderUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    numSongs?: NullableIntFieldUpdateOperationsInput | number | null
    songLength?: NullableStringFieldUpdateOperationsInput | string | null
    numStems?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    driveLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewToken?: ReviewTokenUpdateOneWithoutOrderNestedInput
    review?: ReviewUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    numSongs?: NullableIntFieldUpdateOperationsInput | number | null
    songLength?: NullableStringFieldUpdateOperationsInput | string | null
    numStems?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    driveLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewToken?: ReviewTokenUncheckedUpdateOneWithoutOrderNestedInput
    review?: ReviewUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateWithoutReviewTokenInput = {
    id?: string
    publicId: string
    customerName: string
    customerEmail: string
    serviceType: string
    genre?: string | null
    message?: string | null
    numSongs?: number | null
    songLength?: string | null
    numStems?: number | null
    status?: string
    driveLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: OrderStatusHistoryCreateNestedManyWithoutOrderInput
    review?: ReviewCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutReviewTokenInput = {
    id?: string
    publicId: string
    customerName: string
    customerEmail: string
    serviceType: string
    genre?: string | null
    message?: string | null
    numSongs?: number | null
    songLength?: string | null
    numStems?: number | null
    status?: string
    driveLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput
    review?: ReviewUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutReviewTokenInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutReviewTokenInput, OrderUncheckedCreateWithoutReviewTokenInput>
  }

  export type OrderUpsertWithoutReviewTokenInput = {
    update: XOR<OrderUpdateWithoutReviewTokenInput, OrderUncheckedUpdateWithoutReviewTokenInput>
    create: XOR<OrderCreateWithoutReviewTokenInput, OrderUncheckedCreateWithoutReviewTokenInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutReviewTokenInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutReviewTokenInput, OrderUncheckedUpdateWithoutReviewTokenInput>
  }

  export type OrderUpdateWithoutReviewTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    numSongs?: NullableIntFieldUpdateOperationsInput | number | null
    songLength?: NullableStringFieldUpdateOperationsInput | string | null
    numStems?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    driveLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: OrderStatusHistoryUpdateManyWithoutOrderNestedInput
    review?: ReviewUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutReviewTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    numSongs?: NullableIntFieldUpdateOperationsInput | number | null
    songLength?: NullableStringFieldUpdateOperationsInput | string | null
    numStems?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    driveLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput
    review?: ReviewUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderStatusHistoryCreateManyOrderInput = {
    id?: string
    fromStatus: string
    toStatus: string
    changedBy: string
    message?: string | null
    createdAt?: Date | string
  }

  export type OrderStatusHistoryUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusHistoryUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusHistoryUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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