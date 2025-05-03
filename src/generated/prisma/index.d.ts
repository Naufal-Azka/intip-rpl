
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
 * Model Jadwal
 * 
 */
export type Jadwal = $Result.DefaultSelection<Prisma.$JadwalPayload>
/**
 * Model Laporan
 * 
 */
export type Laporan = $Result.DefaultSelection<Prisma.$LaporanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Hari: {
  Senin: 'Senin',
  Selasa: 'Selasa',
  Rabu: 'Rabu',
  Kamis: 'Kamis',
  Jumat: 'Jumat'
};

export type Hari = (typeof Hari)[keyof typeof Hari]


export const Lab: {
  RPL_1: 'RPL_1',
  RPL_2: 'RPL_2',
  RPL_3: 'RPL_3'
};

export type Lab = (typeof Lab)[keyof typeof Lab]


export const Kelas: {
  Kosong: 'Kosong',
  X_PPLG_1: 'X_PPLG_1',
  X_PPLG_2: 'X_PPLG_2',
  X_PPLG_3: 'X_PPLG_3',
  XI_PPLG_1: 'XI_PPLG_1',
  XI_PPLG_2: 'XI_PPLG_2',
  XI_PPLG_3: 'XI_PPLG_3',
  XII_PPLG_1: 'XII_PPLG_1',
  XII_PPLG_2: 'XII_PPLG_2',
  XII_PPLG_3: 'XII_PPLG_3'
};

export type Kelas = (typeof Kelas)[keyof typeof Kelas]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Hari = $Enums.Hari

export const Hari: typeof $Enums.Hari

export type Lab = $Enums.Lab

export const Lab: typeof $Enums.Lab

export type Kelas = $Enums.Kelas

export const Kelas: typeof $Enums.Kelas

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwal`: Exposes CRUD operations for the **Jadwal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jadwals
    * const jadwals = await prisma.jadwal.findMany()
    * ```
    */
  get jadwal(): Prisma.JadwalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laporan`: Exposes CRUD operations for the **Laporan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laporans
    * const laporans = await prisma.laporan.findMany()
    * ```
    */
  get laporan(): Prisma.LaporanDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Jadwal: 'Jadwal',
    Laporan: 'Laporan'
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
      modelProps: "user" | "jadwal" | "laporan"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Jadwal: {
        payload: Prisma.$JadwalPayload<ExtArgs>
        fields: Prisma.JadwalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findFirst: {
            args: Prisma.JadwalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findMany: {
            args: Prisma.JadwalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          create: {
            args: Prisma.JadwalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          createMany: {
            args: Prisma.JadwalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JadwalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          delete: {
            args: Prisma.JadwalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          update: {
            args: Prisma.JadwalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          deleteMany: {
            args: Prisma.JadwalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JadwalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          upsert: {
            args: Prisma.JadwalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          aggregate: {
            args: Prisma.JadwalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwal>
          }
          groupBy: {
            args: Prisma.JadwalGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalCountAggregateOutputType> | number
          }
        }
      }
      Laporan: {
        payload: Prisma.$LaporanPayload<ExtArgs>
        fields: Prisma.LaporanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaporanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaporanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          findFirst: {
            args: Prisma.LaporanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaporanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          findMany: {
            args: Prisma.LaporanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          create: {
            args: Prisma.LaporanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          createMany: {
            args: Prisma.LaporanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaporanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          delete: {
            args: Prisma.LaporanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          update: {
            args: Prisma.LaporanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          deleteMany: {
            args: Prisma.LaporanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaporanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LaporanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          upsert: {
            args: Prisma.LaporanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          aggregate: {
            args: Prisma.LaporanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaporan>
          }
          groupBy: {
            args: Prisma.LaporanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaporanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaporanCountArgs<ExtArgs>
            result: $Utils.Optional<LaporanCountAggregateOutputType> | number
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
    user?: UserOmit
    jadwal?: JadwalOmit
    laporan?: LaporanOmit
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
   * Count Type JadwalCountOutputType
   */

  export type JadwalCountOutputType = {
    laporan: number
  }

  export type JadwalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | JadwalCountOutputTypeCountLaporanArgs
  }

  // Custom InputTypes
  /**
   * JadwalCountOutputType without action
   */
  export type JadwalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalCountOutputType
     */
    select?: JadwalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JadwalCountOutputType without action
   */
  export type JadwalCountOutputTypeCountLaporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
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
    username: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
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
    username?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
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
    username: string
    password: string
    role: $Enums.Role
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
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Jadwal
   */

  export type AggregateJadwal = {
    _count: JadwalCountAggregateOutputType | null
    _avg: JadwalAvgAggregateOutputType | null
    _sum: JadwalSumAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  export type JadwalAvgAggregateOutputType = {
    id: number | null
  }

  export type JadwalSumAggregateOutputType = {
    id: number | null
  }

  export type JadwalMinAggregateOutputType = {
    id: number | null
    hari: $Enums.Hari | null
    lab: $Enums.Lab | null
    kelas: $Enums.Kelas | null
    waktuMulai: Date | null
    waktuSelesai: Date | null
  }

  export type JadwalMaxAggregateOutputType = {
    id: number | null
    hari: $Enums.Hari | null
    lab: $Enums.Lab | null
    kelas: $Enums.Kelas | null
    waktuMulai: Date | null
    waktuSelesai: Date | null
  }

  export type JadwalCountAggregateOutputType = {
    id: number
    hari: number
    lab: number
    kelas: number
    waktuMulai: number
    waktuSelesai: number
    _all: number
  }


  export type JadwalAvgAggregateInputType = {
    id?: true
  }

  export type JadwalSumAggregateInputType = {
    id?: true
  }

  export type JadwalMinAggregateInputType = {
    id?: true
    hari?: true
    lab?: true
    kelas?: true
    waktuMulai?: true
    waktuSelesai?: true
  }

  export type JadwalMaxAggregateInputType = {
    id?: true
    hari?: true
    lab?: true
    kelas?: true
    waktuMulai?: true
    waktuSelesai?: true
  }

  export type JadwalCountAggregateInputType = {
    id?: true
    hari?: true
    lab?: true
    kelas?: true
    waktuMulai?: true
    waktuSelesai?: true
    _all?: true
  }

  export type JadwalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwal to aggregate.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jadwals
    **/
    _count?: true | JadwalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JadwalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JadwalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalMaxAggregateInputType
  }

  export type GetJadwalAggregateType<T extends JadwalAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwal[P]>
      : GetScalarType<T[P], AggregateJadwal[P]>
  }




  export type JadwalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithAggregationInput | JadwalOrderByWithAggregationInput[]
    by: JadwalScalarFieldEnum[] | JadwalScalarFieldEnum
    having?: JadwalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalCountAggregateInputType | true
    _avg?: JadwalAvgAggregateInputType
    _sum?: JadwalSumAggregateInputType
    _min?: JadwalMinAggregateInputType
    _max?: JadwalMaxAggregateInputType
  }

  export type JadwalGroupByOutputType = {
    id: number
    hari: $Enums.Hari
    lab: $Enums.Lab
    kelas: $Enums.Kelas
    waktuMulai: Date
    waktuSelesai: Date
    _count: JadwalCountAggregateOutputType | null
    _avg: JadwalAvgAggregateOutputType | null
    _sum: JadwalSumAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  type GetJadwalGroupByPayload<T extends JadwalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalGroupByOutputType[P]>
        }
      >
    >


  export type JadwalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hari?: boolean
    lab?: boolean
    kelas?: boolean
    waktuMulai?: boolean
    waktuSelesai?: boolean
    laporan?: boolean | Jadwal$laporanArgs<ExtArgs>
    _count?: boolean | JadwalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>

  export type JadwalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hari?: boolean
    lab?: boolean
    kelas?: boolean
    waktuMulai?: boolean
    waktuSelesai?: boolean
  }, ExtArgs["result"]["jadwal"]>

  export type JadwalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hari?: boolean
    lab?: boolean
    kelas?: boolean
    waktuMulai?: boolean
    waktuSelesai?: boolean
  }, ExtArgs["result"]["jadwal"]>

  export type JadwalSelectScalar = {
    id?: boolean
    hari?: boolean
    lab?: boolean
    kelas?: boolean
    waktuMulai?: boolean
    waktuSelesai?: boolean
  }

  export type JadwalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hari" | "lab" | "kelas" | "waktuMulai" | "waktuSelesai", ExtArgs["result"]["jadwal"]>
  export type JadwalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | Jadwal$laporanArgs<ExtArgs>
    _count?: boolean | JadwalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JadwalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JadwalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JadwalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jadwal"
    objects: {
      laporan: Prisma.$LaporanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hari: $Enums.Hari
      lab: $Enums.Lab
      kelas: $Enums.Kelas
      waktuMulai: Date
      waktuSelesai: Date
    }, ExtArgs["result"]["jadwal"]>
    composites: {}
  }

  type JadwalGetPayload<S extends boolean | null | undefined | JadwalDefaultArgs> = $Result.GetResult<Prisma.$JadwalPayload, S>

  type JadwalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JadwalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalCountAggregateInputType | true
    }

  export interface JadwalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jadwal'], meta: { name: 'Jadwal' } }
    /**
     * Find zero or one Jadwal that matches the filter.
     * @param {JadwalFindUniqueArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalFindUniqueArgs>(args: SelectSubset<T, JadwalFindUniqueArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jadwal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalFindUniqueOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalFindFirstArgs>(args?: SelectSubset<T, JadwalFindFirstArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jadwals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jadwals
     * const jadwals = await prisma.jadwal.findMany()
     * 
     * // Get first 10 Jadwals
     * const jadwals = await prisma.jadwal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalFindManyArgs>(args?: SelectSubset<T, JadwalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jadwal.
     * @param {JadwalCreateArgs} args - Arguments to create a Jadwal.
     * @example
     * // Create one Jadwal
     * const Jadwal = await prisma.jadwal.create({
     *   data: {
     *     // ... data to create a Jadwal
     *   }
     * })
     * 
     */
    create<T extends JadwalCreateArgs>(args: SelectSubset<T, JadwalCreateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jadwals.
     * @param {JadwalCreateManyArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalCreateManyArgs>(args?: SelectSubset<T, JadwalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jadwals and returns the data saved in the database.
     * @param {JadwalCreateManyAndReturnArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jadwals and only return the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JadwalCreateManyAndReturnArgs>(args?: SelectSubset<T, JadwalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jadwal.
     * @param {JadwalDeleteArgs} args - Arguments to delete one Jadwal.
     * @example
     * // Delete one Jadwal
     * const Jadwal = await prisma.jadwal.delete({
     *   where: {
     *     // ... filter to delete one Jadwal
     *   }
     * })
     * 
     */
    delete<T extends JadwalDeleteArgs>(args: SelectSubset<T, JadwalDeleteArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jadwal.
     * @param {JadwalUpdateArgs} args - Arguments to update one Jadwal.
     * @example
     * // Update one Jadwal
     * const jadwal = await prisma.jadwal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalUpdateArgs>(args: SelectSubset<T, JadwalUpdateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jadwals.
     * @param {JadwalDeleteManyArgs} args - Arguments to filter Jadwals to delete.
     * @example
     * // Delete a few Jadwals
     * const { count } = await prisma.jadwal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalDeleteManyArgs>(args?: SelectSubset<T, JadwalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalUpdateManyArgs>(args: SelectSubset<T, JadwalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals and returns the data updated in the database.
     * @param {JadwalUpdateManyAndReturnArgs} args - Arguments to update many Jadwals.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jadwals and only return the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.updateManyAndReturn({
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
    updateManyAndReturn<T extends JadwalUpdateManyAndReturnArgs>(args: SelectSubset<T, JadwalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jadwal.
     * @param {JadwalUpsertArgs} args - Arguments to update or create a Jadwal.
     * @example
     * // Update or create a Jadwal
     * const jadwal = await prisma.jadwal.upsert({
     *   create: {
     *     // ... data to create a Jadwal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jadwal we want to update
     *   }
     * })
     */
    upsert<T extends JadwalUpsertArgs>(args: SelectSubset<T, JadwalUpsertArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalCountArgs} args - Arguments to filter Jadwals to count.
     * @example
     * // Count the number of Jadwals
     * const count = await prisma.jadwal.count({
     *   where: {
     *     // ... the filter for the Jadwals we want to count
     *   }
     * })
    **/
    count<T extends JadwalCountArgs>(
      args?: Subset<T, JadwalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JadwalAggregateArgs>(args: Subset<T, JadwalAggregateArgs>): Prisma.PrismaPromise<GetJadwalAggregateType<T>>

    /**
     * Group by Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalGroupByArgs} args - Group by arguments.
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
      T extends JadwalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalGroupByArgs['orderBy'] }
        : { orderBy?: JadwalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JadwalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jadwal model
   */
  readonly fields: JadwalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jadwal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laporan<T extends Jadwal$laporanArgs<ExtArgs> = {}>(args?: Subset<T, Jadwal$laporanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Jadwal model
   */
  interface JadwalFieldRefs {
    readonly id: FieldRef<"Jadwal", 'Int'>
    readonly hari: FieldRef<"Jadwal", 'Hari'>
    readonly lab: FieldRef<"Jadwal", 'Lab'>
    readonly kelas: FieldRef<"Jadwal", 'Kelas'>
    readonly waktuMulai: FieldRef<"Jadwal", 'DateTime'>
    readonly waktuSelesai: FieldRef<"Jadwal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Jadwal findUnique
   */
  export type JadwalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findUniqueOrThrow
   */
  export type JadwalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findFirst
   */
  export type JadwalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findFirstOrThrow
   */
  export type JadwalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findMany
   */
  export type JadwalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwals to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal create
   */
  export type JadwalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The data needed to create a Jadwal.
     */
    data: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
  }

  /**
   * Jadwal createMany
   */
  export type JadwalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jadwals.
     */
    data: JadwalCreateManyInput | JadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jadwal createManyAndReturn
   */
  export type JadwalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * The data used to create many Jadwals.
     */
    data: JadwalCreateManyInput | JadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jadwal update
   */
  export type JadwalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The data needed to update a Jadwal.
     */
    data: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
    /**
     * Choose, which Jadwal to update.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal updateMany
   */
  export type JadwalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jadwals.
     */
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyInput>
    /**
     * Filter which Jadwals to update
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to update.
     */
    limit?: number
  }

  /**
   * Jadwal updateManyAndReturn
   */
  export type JadwalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * The data used to update Jadwals.
     */
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyInput>
    /**
     * Filter which Jadwals to update
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to update.
     */
    limit?: number
  }

  /**
   * Jadwal upsert
   */
  export type JadwalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The filter to search for the Jadwal to update in case it exists.
     */
    where: JadwalWhereUniqueInput
    /**
     * In case the Jadwal found by the `where` argument doesn't exist, create a new Jadwal with this data.
     */
    create: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
    /**
     * In case the Jadwal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
  }

  /**
   * Jadwal delete
   */
  export type JadwalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter which Jadwal to delete.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal deleteMany
   */
  export type JadwalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwals to delete
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to delete.
     */
    limit?: number
  }

  /**
   * Jadwal.laporan
   */
  export type Jadwal$laporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    cursor?: LaporanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Jadwal without action
   */
  export type JadwalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
  }


  /**
   * Model Laporan
   */

  export type AggregateLaporan = {
    _count: LaporanCountAggregateOutputType | null
    _avg: LaporanAvgAggregateOutputType | null
    _sum: LaporanSumAggregateOutputType | null
    _min: LaporanMinAggregateOutputType | null
    _max: LaporanMaxAggregateOutputType | null
  }

  export type LaporanAvgAggregateOutputType = {
    id: number | null
    id_jadwal: number | null
  }

  export type LaporanSumAggregateOutputType = {
    id: number | null
    id_jadwal: number | null
  }

  export type LaporanMinAggregateOutputType = {
    id: number | null
    id_jadwal: number | null
    foto_ruangan: string | null
    foto_kerusakan: string | null
    deskripsi_kerusakan: string | null
    kerusakan_1: string | null
    kerusakan_2: string | null
    kerusakan_3: string | null
    kerusakan_4: string | null
    kerusakan_5: string | null
  }

  export type LaporanMaxAggregateOutputType = {
    id: number | null
    id_jadwal: number | null
    foto_ruangan: string | null
    foto_kerusakan: string | null
    deskripsi_kerusakan: string | null
    kerusakan_1: string | null
    kerusakan_2: string | null
    kerusakan_3: string | null
    kerusakan_4: string | null
    kerusakan_5: string | null
  }

  export type LaporanCountAggregateOutputType = {
    id: number
    id_jadwal: number
    foto_ruangan: number
    foto_kerusakan: number
    deskripsi_kerusakan: number
    kerusakan_1: number
    kerusakan_2: number
    kerusakan_3: number
    kerusakan_4: number
    kerusakan_5: number
    _all: number
  }


  export type LaporanAvgAggregateInputType = {
    id?: true
    id_jadwal?: true
  }

  export type LaporanSumAggregateInputType = {
    id?: true
    id_jadwal?: true
  }

  export type LaporanMinAggregateInputType = {
    id?: true
    id_jadwal?: true
    foto_ruangan?: true
    foto_kerusakan?: true
    deskripsi_kerusakan?: true
    kerusakan_1?: true
    kerusakan_2?: true
    kerusakan_3?: true
    kerusakan_4?: true
    kerusakan_5?: true
  }

  export type LaporanMaxAggregateInputType = {
    id?: true
    id_jadwal?: true
    foto_ruangan?: true
    foto_kerusakan?: true
    deskripsi_kerusakan?: true
    kerusakan_1?: true
    kerusakan_2?: true
    kerusakan_3?: true
    kerusakan_4?: true
    kerusakan_5?: true
  }

  export type LaporanCountAggregateInputType = {
    id?: true
    id_jadwal?: true
    foto_ruangan?: true
    foto_kerusakan?: true
    deskripsi_kerusakan?: true
    kerusakan_1?: true
    kerusakan_2?: true
    kerusakan_3?: true
    kerusakan_4?: true
    kerusakan_5?: true
    _all?: true
  }

  export type LaporanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laporan to aggregate.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Laporans
    **/
    _count?: true | LaporanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaporanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaporanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaporanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaporanMaxAggregateInputType
  }

  export type GetLaporanAggregateType<T extends LaporanAggregateArgs> = {
        [P in keyof T & keyof AggregateLaporan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaporan[P]>
      : GetScalarType<T[P], AggregateLaporan[P]>
  }




  export type LaporanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithAggregationInput | LaporanOrderByWithAggregationInput[]
    by: LaporanScalarFieldEnum[] | LaporanScalarFieldEnum
    having?: LaporanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaporanCountAggregateInputType | true
    _avg?: LaporanAvgAggregateInputType
    _sum?: LaporanSumAggregateInputType
    _min?: LaporanMinAggregateInputType
    _max?: LaporanMaxAggregateInputType
  }

  export type LaporanGroupByOutputType = {
    id: number
    id_jadwal: number
    foto_ruangan: string
    foto_kerusakan: string
    deskripsi_kerusakan: string
    kerusakan_1: string
    kerusakan_2: string
    kerusakan_3: string
    kerusakan_4: string
    kerusakan_5: string
    _count: LaporanCountAggregateOutputType | null
    _avg: LaporanAvgAggregateOutputType | null
    _sum: LaporanSumAggregateOutputType | null
    _min: LaporanMinAggregateOutputType | null
    _max: LaporanMaxAggregateOutputType | null
  }

  type GetLaporanGroupByPayload<T extends LaporanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaporanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaporanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaporanGroupByOutputType[P]>
            : GetScalarType<T[P], LaporanGroupByOutputType[P]>
        }
      >
    >


  export type LaporanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_jadwal?: boolean
    foto_ruangan?: boolean
    foto_kerusakan?: boolean
    deskripsi_kerusakan?: boolean
    kerusakan_1?: boolean
    kerusakan_2?: boolean
    kerusakan_3?: boolean
    kerusakan_4?: boolean
    kerusakan_5?: boolean
    jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_jadwal?: boolean
    foto_ruangan?: boolean
    foto_kerusakan?: boolean
    deskripsi_kerusakan?: boolean
    kerusakan_1?: boolean
    kerusakan_2?: boolean
    kerusakan_3?: boolean
    kerusakan_4?: boolean
    kerusakan_5?: boolean
    jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_jadwal?: boolean
    foto_ruangan?: boolean
    foto_kerusakan?: boolean
    deskripsi_kerusakan?: boolean
    kerusakan_1?: boolean
    kerusakan_2?: boolean
    kerusakan_3?: boolean
    kerusakan_4?: boolean
    kerusakan_5?: boolean
    jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectScalar = {
    id?: boolean
    id_jadwal?: boolean
    foto_ruangan?: boolean
    foto_kerusakan?: boolean
    deskripsi_kerusakan?: boolean
    kerusakan_1?: boolean
    kerusakan_2?: boolean
    kerusakan_3?: boolean
    kerusakan_4?: boolean
    kerusakan_5?: boolean
  }

  export type LaporanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_jadwal" | "foto_ruangan" | "foto_kerusakan" | "deskripsi_kerusakan" | "kerusakan_1" | "kerusakan_2" | "kerusakan_3" | "kerusakan_4" | "kerusakan_5", ExtArgs["result"]["laporan"]>
  export type LaporanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
  }
  export type LaporanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
  }
  export type LaporanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
  }

  export type $LaporanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Laporan"
    objects: {
      jadwal: Prisma.$JadwalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_jadwal: number
      foto_ruangan: string
      foto_kerusakan: string
      deskripsi_kerusakan: string
      kerusakan_1: string
      kerusakan_2: string
      kerusakan_3: string
      kerusakan_4: string
      kerusakan_5: string
    }, ExtArgs["result"]["laporan"]>
    composites: {}
  }

  type LaporanGetPayload<S extends boolean | null | undefined | LaporanDefaultArgs> = $Result.GetResult<Prisma.$LaporanPayload, S>

  type LaporanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaporanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaporanCountAggregateInputType | true
    }

  export interface LaporanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Laporan'], meta: { name: 'Laporan' } }
    /**
     * Find zero or one Laporan that matches the filter.
     * @param {LaporanFindUniqueArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaporanFindUniqueArgs>(args: SelectSubset<T, LaporanFindUniqueArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Laporan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaporanFindUniqueOrThrowArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaporanFindUniqueOrThrowArgs>(args: SelectSubset<T, LaporanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laporan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindFirstArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaporanFindFirstArgs>(args?: SelectSubset<T, LaporanFindFirstArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laporan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindFirstOrThrowArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaporanFindFirstOrThrowArgs>(args?: SelectSubset<T, LaporanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Laporans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laporans
     * const laporans = await prisma.laporan.findMany()
     * 
     * // Get first 10 Laporans
     * const laporans = await prisma.laporan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laporanWithIdOnly = await prisma.laporan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaporanFindManyArgs>(args?: SelectSubset<T, LaporanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Laporan.
     * @param {LaporanCreateArgs} args - Arguments to create a Laporan.
     * @example
     * // Create one Laporan
     * const Laporan = await prisma.laporan.create({
     *   data: {
     *     // ... data to create a Laporan
     *   }
     * })
     * 
     */
    create<T extends LaporanCreateArgs>(args: SelectSubset<T, LaporanCreateArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Laporans.
     * @param {LaporanCreateManyArgs} args - Arguments to create many Laporans.
     * @example
     * // Create many Laporans
     * const laporan = await prisma.laporan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaporanCreateManyArgs>(args?: SelectSubset<T, LaporanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Laporans and returns the data saved in the database.
     * @param {LaporanCreateManyAndReturnArgs} args - Arguments to create many Laporans.
     * @example
     * // Create many Laporans
     * const laporan = await prisma.laporan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Laporans and only return the `id`
     * const laporanWithIdOnly = await prisma.laporan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaporanCreateManyAndReturnArgs>(args?: SelectSubset<T, LaporanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Laporan.
     * @param {LaporanDeleteArgs} args - Arguments to delete one Laporan.
     * @example
     * // Delete one Laporan
     * const Laporan = await prisma.laporan.delete({
     *   where: {
     *     // ... filter to delete one Laporan
     *   }
     * })
     * 
     */
    delete<T extends LaporanDeleteArgs>(args: SelectSubset<T, LaporanDeleteArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Laporan.
     * @param {LaporanUpdateArgs} args - Arguments to update one Laporan.
     * @example
     * // Update one Laporan
     * const laporan = await prisma.laporan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaporanUpdateArgs>(args: SelectSubset<T, LaporanUpdateArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Laporans.
     * @param {LaporanDeleteManyArgs} args - Arguments to filter Laporans to delete.
     * @example
     * // Delete a few Laporans
     * const { count } = await prisma.laporan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaporanDeleteManyArgs>(args?: SelectSubset<T, LaporanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laporans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laporans
     * const laporan = await prisma.laporan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaporanUpdateManyArgs>(args: SelectSubset<T, LaporanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laporans and returns the data updated in the database.
     * @param {LaporanUpdateManyAndReturnArgs} args - Arguments to update many Laporans.
     * @example
     * // Update many Laporans
     * const laporan = await prisma.laporan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Laporans and only return the `id`
     * const laporanWithIdOnly = await prisma.laporan.updateManyAndReturn({
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
    updateManyAndReturn<T extends LaporanUpdateManyAndReturnArgs>(args: SelectSubset<T, LaporanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Laporan.
     * @param {LaporanUpsertArgs} args - Arguments to update or create a Laporan.
     * @example
     * // Update or create a Laporan
     * const laporan = await prisma.laporan.upsert({
     *   create: {
     *     // ... data to create a Laporan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laporan we want to update
     *   }
     * })
     */
    upsert<T extends LaporanUpsertArgs>(args: SelectSubset<T, LaporanUpsertArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Laporans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCountArgs} args - Arguments to filter Laporans to count.
     * @example
     * // Count the number of Laporans
     * const count = await prisma.laporan.count({
     *   where: {
     *     // ... the filter for the Laporans we want to count
     *   }
     * })
    **/
    count<T extends LaporanCountArgs>(
      args?: Subset<T, LaporanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaporanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Laporan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LaporanAggregateArgs>(args: Subset<T, LaporanAggregateArgs>): Prisma.PrismaPromise<GetLaporanAggregateType<T>>

    /**
     * Group by Laporan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanGroupByArgs} args - Group by arguments.
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
      T extends LaporanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaporanGroupByArgs['orderBy'] }
        : { orderBy?: LaporanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LaporanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Laporan model
   */
  readonly fields: LaporanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Laporan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaporanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jadwal<T extends JadwalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JadwalDefaultArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Laporan model
   */
  interface LaporanFieldRefs {
    readonly id: FieldRef<"Laporan", 'Int'>
    readonly id_jadwal: FieldRef<"Laporan", 'Int'>
    readonly foto_ruangan: FieldRef<"Laporan", 'String'>
    readonly foto_kerusakan: FieldRef<"Laporan", 'String'>
    readonly deskripsi_kerusakan: FieldRef<"Laporan", 'String'>
    readonly kerusakan_1: FieldRef<"Laporan", 'String'>
    readonly kerusakan_2: FieldRef<"Laporan", 'String'>
    readonly kerusakan_3: FieldRef<"Laporan", 'String'>
    readonly kerusakan_4: FieldRef<"Laporan", 'String'>
    readonly kerusakan_5: FieldRef<"Laporan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Laporan findUnique
   */
  export type LaporanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan findUniqueOrThrow
   */
  export type LaporanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan findFirst
   */
  export type LaporanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laporans.
     */
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan findFirstOrThrow
   */
  export type LaporanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laporans.
     */
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan findMany
   */
  export type LaporanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporans to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan create
   */
  export type LaporanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The data needed to create a Laporan.
     */
    data: XOR<LaporanCreateInput, LaporanUncheckedCreateInput>
  }

  /**
   * Laporan createMany
   */
  export type LaporanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Laporans.
     */
    data: LaporanCreateManyInput | LaporanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Laporan createManyAndReturn
   */
  export type LaporanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * The data used to create many Laporans.
     */
    data: LaporanCreateManyInput | LaporanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Laporan update
   */
  export type LaporanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The data needed to update a Laporan.
     */
    data: XOR<LaporanUpdateInput, LaporanUncheckedUpdateInput>
    /**
     * Choose, which Laporan to update.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan updateMany
   */
  export type LaporanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Laporans.
     */
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyInput>
    /**
     * Filter which Laporans to update
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to update.
     */
    limit?: number
  }

  /**
   * Laporan updateManyAndReturn
   */
  export type LaporanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * The data used to update Laporans.
     */
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyInput>
    /**
     * Filter which Laporans to update
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Laporan upsert
   */
  export type LaporanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The filter to search for the Laporan to update in case it exists.
     */
    where: LaporanWhereUniqueInput
    /**
     * In case the Laporan found by the `where` argument doesn't exist, create a new Laporan with this data.
     */
    create: XOR<LaporanCreateInput, LaporanUncheckedCreateInput>
    /**
     * In case the Laporan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaporanUpdateInput, LaporanUncheckedUpdateInput>
  }

  /**
   * Laporan delete
   */
  export type LaporanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter which Laporan to delete.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan deleteMany
   */
  export type LaporanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laporans to delete
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to delete.
     */
    limit?: number
  }

  /**
   * Laporan without action
   */
  export type LaporanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
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
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JadwalScalarFieldEnum: {
    id: 'id',
    hari: 'hari',
    lab: 'lab',
    kelas: 'kelas',
    waktuMulai: 'waktuMulai',
    waktuSelesai: 'waktuSelesai'
  };

  export type JadwalScalarFieldEnum = (typeof JadwalScalarFieldEnum)[keyof typeof JadwalScalarFieldEnum]


  export const LaporanScalarFieldEnum: {
    id: 'id',
    id_jadwal: 'id_jadwal',
    foto_ruangan: 'foto_ruangan',
    foto_kerusakan: 'foto_kerusakan',
    deskripsi_kerusakan: 'deskripsi_kerusakan',
    kerusakan_1: 'kerusakan_1',
    kerusakan_2: 'kerusakan_2',
    kerusakan_3: 'kerusakan_3',
    kerusakan_4: 'kerusakan_4',
    kerusakan_5: 'kerusakan_5'
  };

  export type LaporanScalarFieldEnum = (typeof LaporanScalarFieldEnum)[keyof typeof LaporanScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Hari'
   */
  export type EnumHariFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Hari'>
    


  /**
   * Reference to a field of type 'Hari[]'
   */
  export type ListEnumHariFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Hari[]'>
    


  /**
   * Reference to a field of type 'Lab'
   */
  export type EnumLabFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Lab'>
    


  /**
   * Reference to a field of type 'Lab[]'
   */
  export type ListEnumLabFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Lab[]'>
    


  /**
   * Reference to a field of type 'Kelas'
   */
  export type EnumKelasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kelas'>
    


  /**
   * Reference to a field of type 'Kelas[]'
   */
  export type ListEnumKelasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kelas[]'>
    


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
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type JadwalWhereInput = {
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    id?: IntFilter<"Jadwal"> | number
    hari?: EnumHariFilter<"Jadwal"> | $Enums.Hari
    lab?: EnumLabFilter<"Jadwal"> | $Enums.Lab
    kelas?: EnumKelasFilter<"Jadwal"> | $Enums.Kelas
    waktuMulai?: DateTimeFilter<"Jadwal"> | Date | string
    waktuSelesai?: DateTimeFilter<"Jadwal"> | Date | string
    laporan?: LaporanListRelationFilter
  }

  export type JadwalOrderByWithRelationInput = {
    id?: SortOrder
    hari?: SortOrder
    lab?: SortOrder
    kelas?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
    laporan?: LaporanOrderByRelationAggregateInput
  }

  export type JadwalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    hari?: EnumHariFilter<"Jadwal"> | $Enums.Hari
    lab?: EnumLabFilter<"Jadwal"> | $Enums.Lab
    kelas?: EnumKelasFilter<"Jadwal"> | $Enums.Kelas
    waktuMulai?: DateTimeFilter<"Jadwal"> | Date | string
    waktuSelesai?: DateTimeFilter<"Jadwal"> | Date | string
    laporan?: LaporanListRelationFilter
  }, "id">

  export type JadwalOrderByWithAggregationInput = {
    id?: SortOrder
    hari?: SortOrder
    lab?: SortOrder
    kelas?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
    _count?: JadwalCountOrderByAggregateInput
    _avg?: JadwalAvgOrderByAggregateInput
    _max?: JadwalMaxOrderByAggregateInput
    _min?: JadwalMinOrderByAggregateInput
    _sum?: JadwalSumOrderByAggregateInput
  }

  export type JadwalScalarWhereWithAggregatesInput = {
    AND?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    OR?: JadwalScalarWhereWithAggregatesInput[]
    NOT?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jadwal"> | number
    hari?: EnumHariWithAggregatesFilter<"Jadwal"> | $Enums.Hari
    lab?: EnumLabWithAggregatesFilter<"Jadwal"> | $Enums.Lab
    kelas?: EnumKelasWithAggregatesFilter<"Jadwal"> | $Enums.Kelas
    waktuMulai?: DateTimeWithAggregatesFilter<"Jadwal"> | Date | string
    waktuSelesai?: DateTimeWithAggregatesFilter<"Jadwal"> | Date | string
  }

  export type LaporanWhereInput = {
    AND?: LaporanWhereInput | LaporanWhereInput[]
    OR?: LaporanWhereInput[]
    NOT?: LaporanWhereInput | LaporanWhereInput[]
    id?: IntFilter<"Laporan"> | number
    id_jadwal?: IntFilter<"Laporan"> | number
    foto_ruangan?: StringFilter<"Laporan"> | string
    foto_kerusakan?: StringFilter<"Laporan"> | string
    deskripsi_kerusakan?: StringFilter<"Laporan"> | string
    kerusakan_1?: StringFilter<"Laporan"> | string
    kerusakan_2?: StringFilter<"Laporan"> | string
    kerusakan_3?: StringFilter<"Laporan"> | string
    kerusakan_4?: StringFilter<"Laporan"> | string
    kerusakan_5?: StringFilter<"Laporan"> | string
    jadwal?: XOR<JadwalScalarRelationFilter, JadwalWhereInput>
  }

  export type LaporanOrderByWithRelationInput = {
    id?: SortOrder
    id_jadwal?: SortOrder
    foto_ruangan?: SortOrder
    foto_kerusakan?: SortOrder
    deskripsi_kerusakan?: SortOrder
    kerusakan_1?: SortOrder
    kerusakan_2?: SortOrder
    kerusakan_3?: SortOrder
    kerusakan_4?: SortOrder
    kerusakan_5?: SortOrder
    jadwal?: JadwalOrderByWithRelationInput
  }

  export type LaporanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LaporanWhereInput | LaporanWhereInput[]
    OR?: LaporanWhereInput[]
    NOT?: LaporanWhereInput | LaporanWhereInput[]
    id_jadwal?: IntFilter<"Laporan"> | number
    foto_ruangan?: StringFilter<"Laporan"> | string
    foto_kerusakan?: StringFilter<"Laporan"> | string
    deskripsi_kerusakan?: StringFilter<"Laporan"> | string
    kerusakan_1?: StringFilter<"Laporan"> | string
    kerusakan_2?: StringFilter<"Laporan"> | string
    kerusakan_3?: StringFilter<"Laporan"> | string
    kerusakan_4?: StringFilter<"Laporan"> | string
    kerusakan_5?: StringFilter<"Laporan"> | string
    jadwal?: XOR<JadwalScalarRelationFilter, JadwalWhereInput>
  }, "id">

  export type LaporanOrderByWithAggregationInput = {
    id?: SortOrder
    id_jadwal?: SortOrder
    foto_ruangan?: SortOrder
    foto_kerusakan?: SortOrder
    deskripsi_kerusakan?: SortOrder
    kerusakan_1?: SortOrder
    kerusakan_2?: SortOrder
    kerusakan_3?: SortOrder
    kerusakan_4?: SortOrder
    kerusakan_5?: SortOrder
    _count?: LaporanCountOrderByAggregateInput
    _avg?: LaporanAvgOrderByAggregateInput
    _max?: LaporanMaxOrderByAggregateInput
    _min?: LaporanMinOrderByAggregateInput
    _sum?: LaporanSumOrderByAggregateInput
  }

  export type LaporanScalarWhereWithAggregatesInput = {
    AND?: LaporanScalarWhereWithAggregatesInput | LaporanScalarWhereWithAggregatesInput[]
    OR?: LaporanScalarWhereWithAggregatesInput[]
    NOT?: LaporanScalarWhereWithAggregatesInput | LaporanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Laporan"> | number
    id_jadwal?: IntWithAggregatesFilter<"Laporan"> | number
    foto_ruangan?: StringWithAggregatesFilter<"Laporan"> | string
    foto_kerusakan?: StringWithAggregatesFilter<"Laporan"> | string
    deskripsi_kerusakan?: StringWithAggregatesFilter<"Laporan"> | string
    kerusakan_1?: StringWithAggregatesFilter<"Laporan"> | string
    kerusakan_2?: StringWithAggregatesFilter<"Laporan"> | string
    kerusakan_3?: StringWithAggregatesFilter<"Laporan"> | string
    kerusakan_4?: StringWithAggregatesFilter<"Laporan"> | string
    kerusakan_5?: StringWithAggregatesFilter<"Laporan"> | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    role: $Enums.Role
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type JadwalCreateInput = {
    hari: $Enums.Hari
    lab: $Enums.Lab
    kelas?: $Enums.Kelas
    waktuMulai: Date | string
    waktuSelesai: Date | string
    laporan?: LaporanCreateNestedManyWithoutJadwalInput
  }

  export type JadwalUncheckedCreateInput = {
    id?: number
    hari: $Enums.Hari
    lab: $Enums.Lab
    kelas?: $Enums.Kelas
    waktuMulai: Date | string
    waktuSelesai: Date | string
    laporan?: LaporanUncheckedCreateNestedManyWithoutJadwalInput
  }

  export type JadwalUpdateInput = {
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    lab?: EnumLabFieldUpdateOperationsInput | $Enums.Lab
    kelas?: EnumKelasFieldUpdateOperationsInput | $Enums.Kelas
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    lab?: EnumLabFieldUpdateOperationsInput | $Enums.Lab
    kelas?: EnumKelasFieldUpdateOperationsInput | $Enums.Kelas
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanUncheckedUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalCreateManyInput = {
    id?: number
    hari: $Enums.Hari
    lab: $Enums.Lab
    kelas?: $Enums.Kelas
    waktuMulai: Date | string
    waktuSelesai: Date | string
  }

  export type JadwalUpdateManyMutationInput = {
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    lab?: EnumLabFieldUpdateOperationsInput | $Enums.Lab
    kelas?: EnumKelasFieldUpdateOperationsInput | $Enums.Kelas
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    lab?: EnumLabFieldUpdateOperationsInput | $Enums.Lab
    kelas?: EnumKelasFieldUpdateOperationsInput | $Enums.Kelas
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanCreateInput = {
    foto_ruangan: string
    foto_kerusakan: string
    deskripsi_kerusakan: string
    kerusakan_1: string
    kerusakan_2: string
    kerusakan_3: string
    kerusakan_4: string
    kerusakan_5: string
    jadwal: JadwalCreateNestedOneWithoutLaporanInput
  }

  export type LaporanUncheckedCreateInput = {
    id?: number
    id_jadwal: number
    foto_ruangan: string
    foto_kerusakan: string
    deskripsi_kerusakan: string
    kerusakan_1: string
    kerusakan_2: string
    kerusakan_3: string
    kerusakan_4: string
    kerusakan_5: string
  }

  export type LaporanUpdateInput = {
    foto_ruangan?: StringFieldUpdateOperationsInput | string
    foto_kerusakan?: StringFieldUpdateOperationsInput | string
    deskripsi_kerusakan?: StringFieldUpdateOperationsInput | string
    kerusakan_1?: StringFieldUpdateOperationsInput | string
    kerusakan_2?: StringFieldUpdateOperationsInput | string
    kerusakan_3?: StringFieldUpdateOperationsInput | string
    kerusakan_4?: StringFieldUpdateOperationsInput | string
    kerusakan_5?: StringFieldUpdateOperationsInput | string
    jadwal?: JadwalUpdateOneRequiredWithoutLaporanNestedInput
  }

  export type LaporanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_jadwal?: IntFieldUpdateOperationsInput | number
    foto_ruangan?: StringFieldUpdateOperationsInput | string
    foto_kerusakan?: StringFieldUpdateOperationsInput | string
    deskripsi_kerusakan?: StringFieldUpdateOperationsInput | string
    kerusakan_1?: StringFieldUpdateOperationsInput | string
    kerusakan_2?: StringFieldUpdateOperationsInput | string
    kerusakan_3?: StringFieldUpdateOperationsInput | string
    kerusakan_4?: StringFieldUpdateOperationsInput | string
    kerusakan_5?: StringFieldUpdateOperationsInput | string
  }

  export type LaporanCreateManyInput = {
    id?: number
    id_jadwal: number
    foto_ruangan: string
    foto_kerusakan: string
    deskripsi_kerusakan: string
    kerusakan_1: string
    kerusakan_2: string
    kerusakan_3: string
    kerusakan_4: string
    kerusakan_5: string
  }

  export type LaporanUpdateManyMutationInput = {
    foto_ruangan?: StringFieldUpdateOperationsInput | string
    foto_kerusakan?: StringFieldUpdateOperationsInput | string
    deskripsi_kerusakan?: StringFieldUpdateOperationsInput | string
    kerusakan_1?: StringFieldUpdateOperationsInput | string
    kerusakan_2?: StringFieldUpdateOperationsInput | string
    kerusakan_3?: StringFieldUpdateOperationsInput | string
    kerusakan_4?: StringFieldUpdateOperationsInput | string
    kerusakan_5?: StringFieldUpdateOperationsInput | string
  }

  export type LaporanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_jadwal?: IntFieldUpdateOperationsInput | number
    foto_ruangan?: StringFieldUpdateOperationsInput | string
    foto_kerusakan?: StringFieldUpdateOperationsInput | string
    deskripsi_kerusakan?: StringFieldUpdateOperationsInput | string
    kerusakan_1?: StringFieldUpdateOperationsInput | string
    kerusakan_2?: StringFieldUpdateOperationsInput | string
    kerusakan_3?: StringFieldUpdateOperationsInput | string
    kerusakan_4?: StringFieldUpdateOperationsInput | string
    kerusakan_5?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumHariFilter<$PrismaModel = never> = {
    equals?: $Enums.Hari | EnumHariFieldRefInput<$PrismaModel>
    in?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    not?: NestedEnumHariFilter<$PrismaModel> | $Enums.Hari
  }

  export type EnumLabFilter<$PrismaModel = never> = {
    equals?: $Enums.Lab | EnumLabFieldRefInput<$PrismaModel>
    in?: $Enums.Lab[] | ListEnumLabFieldRefInput<$PrismaModel>
    notIn?: $Enums.Lab[] | ListEnumLabFieldRefInput<$PrismaModel>
    not?: NestedEnumLabFilter<$PrismaModel> | $Enums.Lab
  }

  export type EnumKelasFilter<$PrismaModel = never> = {
    equals?: $Enums.Kelas | EnumKelasFieldRefInput<$PrismaModel>
    in?: $Enums.Kelas[] | ListEnumKelasFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kelas[] | ListEnumKelasFieldRefInput<$PrismaModel>
    not?: NestedEnumKelasFilter<$PrismaModel> | $Enums.Kelas
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

  export type LaporanListRelationFilter = {
    every?: LaporanWhereInput
    some?: LaporanWhereInput
    none?: LaporanWhereInput
  }

  export type LaporanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JadwalCountOrderByAggregateInput = {
    id?: SortOrder
    hari?: SortOrder
    lab?: SortOrder
    kelas?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
  }

  export type JadwalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JadwalMaxOrderByAggregateInput = {
    id?: SortOrder
    hari?: SortOrder
    lab?: SortOrder
    kelas?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
  }

  export type JadwalMinOrderByAggregateInput = {
    id?: SortOrder
    hari?: SortOrder
    lab?: SortOrder
    kelas?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
  }

  export type JadwalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumHariWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Hari | EnumHariFieldRefInput<$PrismaModel>
    in?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    not?: NestedEnumHariWithAggregatesFilter<$PrismaModel> | $Enums.Hari
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHariFilter<$PrismaModel>
    _max?: NestedEnumHariFilter<$PrismaModel>
  }

  export type EnumLabWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Lab | EnumLabFieldRefInput<$PrismaModel>
    in?: $Enums.Lab[] | ListEnumLabFieldRefInput<$PrismaModel>
    notIn?: $Enums.Lab[] | ListEnumLabFieldRefInput<$PrismaModel>
    not?: NestedEnumLabWithAggregatesFilter<$PrismaModel> | $Enums.Lab
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabFilter<$PrismaModel>
    _max?: NestedEnumLabFilter<$PrismaModel>
  }

  export type EnumKelasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kelas | EnumKelasFieldRefInput<$PrismaModel>
    in?: $Enums.Kelas[] | ListEnumKelasFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kelas[] | ListEnumKelasFieldRefInput<$PrismaModel>
    not?: NestedEnumKelasWithAggregatesFilter<$PrismaModel> | $Enums.Kelas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKelasFilter<$PrismaModel>
    _max?: NestedEnumKelasFilter<$PrismaModel>
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

  export type JadwalScalarRelationFilter = {
    is?: JadwalWhereInput
    isNot?: JadwalWhereInput
  }

  export type LaporanCountOrderByAggregateInput = {
    id?: SortOrder
    id_jadwal?: SortOrder
    foto_ruangan?: SortOrder
    foto_kerusakan?: SortOrder
    deskripsi_kerusakan?: SortOrder
    kerusakan_1?: SortOrder
    kerusakan_2?: SortOrder
    kerusakan_3?: SortOrder
    kerusakan_4?: SortOrder
    kerusakan_5?: SortOrder
  }

  export type LaporanAvgOrderByAggregateInput = {
    id?: SortOrder
    id_jadwal?: SortOrder
  }

  export type LaporanMaxOrderByAggregateInput = {
    id?: SortOrder
    id_jadwal?: SortOrder
    foto_ruangan?: SortOrder
    foto_kerusakan?: SortOrder
    deskripsi_kerusakan?: SortOrder
    kerusakan_1?: SortOrder
    kerusakan_2?: SortOrder
    kerusakan_3?: SortOrder
    kerusakan_4?: SortOrder
    kerusakan_5?: SortOrder
  }

  export type LaporanMinOrderByAggregateInput = {
    id?: SortOrder
    id_jadwal?: SortOrder
    foto_ruangan?: SortOrder
    foto_kerusakan?: SortOrder
    deskripsi_kerusakan?: SortOrder
    kerusakan_1?: SortOrder
    kerusakan_2?: SortOrder
    kerusakan_3?: SortOrder
    kerusakan_4?: SortOrder
    kerusakan_5?: SortOrder
  }

  export type LaporanSumOrderByAggregateInput = {
    id?: SortOrder
    id_jadwal?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LaporanCreateNestedManyWithoutJadwalInput = {
    create?: XOR<LaporanCreateWithoutJadwalInput, LaporanUncheckedCreateWithoutJadwalInput> | LaporanCreateWithoutJadwalInput[] | LaporanUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutJadwalInput | LaporanCreateOrConnectWithoutJadwalInput[]
    createMany?: LaporanCreateManyJadwalInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type LaporanUncheckedCreateNestedManyWithoutJadwalInput = {
    create?: XOR<LaporanCreateWithoutJadwalInput, LaporanUncheckedCreateWithoutJadwalInput> | LaporanCreateWithoutJadwalInput[] | LaporanUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutJadwalInput | LaporanCreateOrConnectWithoutJadwalInput[]
    createMany?: LaporanCreateManyJadwalInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type EnumHariFieldUpdateOperationsInput = {
    set?: $Enums.Hari
  }

  export type EnumLabFieldUpdateOperationsInput = {
    set?: $Enums.Lab
  }

  export type EnumKelasFieldUpdateOperationsInput = {
    set?: $Enums.Kelas
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LaporanUpdateManyWithoutJadwalNestedInput = {
    create?: XOR<LaporanCreateWithoutJadwalInput, LaporanUncheckedCreateWithoutJadwalInput> | LaporanCreateWithoutJadwalInput[] | LaporanUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutJadwalInput | LaporanCreateOrConnectWithoutJadwalInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutJadwalInput | LaporanUpsertWithWhereUniqueWithoutJadwalInput[]
    createMany?: LaporanCreateManyJadwalInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutJadwalInput | LaporanUpdateWithWhereUniqueWithoutJadwalInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutJadwalInput | LaporanUpdateManyWithWhereWithoutJadwalInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type LaporanUncheckedUpdateManyWithoutJadwalNestedInput = {
    create?: XOR<LaporanCreateWithoutJadwalInput, LaporanUncheckedCreateWithoutJadwalInput> | LaporanCreateWithoutJadwalInput[] | LaporanUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutJadwalInput | LaporanCreateOrConnectWithoutJadwalInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutJadwalInput | LaporanUpsertWithWhereUniqueWithoutJadwalInput[]
    createMany?: LaporanCreateManyJadwalInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutJadwalInput | LaporanUpdateWithWhereUniqueWithoutJadwalInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutJadwalInput | LaporanUpdateManyWithWhereWithoutJadwalInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type JadwalCreateNestedOneWithoutLaporanInput = {
    create?: XOR<JadwalCreateWithoutLaporanInput, JadwalUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: JadwalCreateOrConnectWithoutLaporanInput
    connect?: JadwalWhereUniqueInput
  }

  export type JadwalUpdateOneRequiredWithoutLaporanNestedInput = {
    create?: XOR<JadwalCreateWithoutLaporanInput, JadwalUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: JadwalCreateOrConnectWithoutLaporanInput
    upsert?: JadwalUpsertWithoutLaporanInput
    connect?: JadwalWhereUniqueInput
    update?: XOR<XOR<JadwalUpdateToOneWithWhereWithoutLaporanInput, JadwalUpdateWithoutLaporanInput>, JadwalUncheckedUpdateWithoutLaporanInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumHariFilter<$PrismaModel = never> = {
    equals?: $Enums.Hari | EnumHariFieldRefInput<$PrismaModel>
    in?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    not?: NestedEnumHariFilter<$PrismaModel> | $Enums.Hari
  }

  export type NestedEnumLabFilter<$PrismaModel = never> = {
    equals?: $Enums.Lab | EnumLabFieldRefInput<$PrismaModel>
    in?: $Enums.Lab[] | ListEnumLabFieldRefInput<$PrismaModel>
    notIn?: $Enums.Lab[] | ListEnumLabFieldRefInput<$PrismaModel>
    not?: NestedEnumLabFilter<$PrismaModel> | $Enums.Lab
  }

  export type NestedEnumKelasFilter<$PrismaModel = never> = {
    equals?: $Enums.Kelas | EnumKelasFieldRefInput<$PrismaModel>
    in?: $Enums.Kelas[] | ListEnumKelasFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kelas[] | ListEnumKelasFieldRefInput<$PrismaModel>
    not?: NestedEnumKelasFilter<$PrismaModel> | $Enums.Kelas
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

  export type NestedEnumHariWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Hari | EnumHariFieldRefInput<$PrismaModel>
    in?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    notIn?: $Enums.Hari[] | ListEnumHariFieldRefInput<$PrismaModel>
    not?: NestedEnumHariWithAggregatesFilter<$PrismaModel> | $Enums.Hari
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHariFilter<$PrismaModel>
    _max?: NestedEnumHariFilter<$PrismaModel>
  }

  export type NestedEnumLabWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Lab | EnumLabFieldRefInput<$PrismaModel>
    in?: $Enums.Lab[] | ListEnumLabFieldRefInput<$PrismaModel>
    notIn?: $Enums.Lab[] | ListEnumLabFieldRefInput<$PrismaModel>
    not?: NestedEnumLabWithAggregatesFilter<$PrismaModel> | $Enums.Lab
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabFilter<$PrismaModel>
    _max?: NestedEnumLabFilter<$PrismaModel>
  }

  export type NestedEnumKelasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kelas | EnumKelasFieldRefInput<$PrismaModel>
    in?: $Enums.Kelas[] | ListEnumKelasFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kelas[] | ListEnumKelasFieldRefInput<$PrismaModel>
    not?: NestedEnumKelasWithAggregatesFilter<$PrismaModel> | $Enums.Kelas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKelasFilter<$PrismaModel>
    _max?: NestedEnumKelasFilter<$PrismaModel>
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

  export type LaporanCreateWithoutJadwalInput = {
    foto_ruangan: string
    foto_kerusakan: string
    deskripsi_kerusakan: string
    kerusakan_1: string
    kerusakan_2: string
    kerusakan_3: string
    kerusakan_4: string
    kerusakan_5: string
  }

  export type LaporanUncheckedCreateWithoutJadwalInput = {
    id?: number
    foto_ruangan: string
    foto_kerusakan: string
    deskripsi_kerusakan: string
    kerusakan_1: string
    kerusakan_2: string
    kerusakan_3: string
    kerusakan_4: string
    kerusakan_5: string
  }

  export type LaporanCreateOrConnectWithoutJadwalInput = {
    where: LaporanWhereUniqueInput
    create: XOR<LaporanCreateWithoutJadwalInput, LaporanUncheckedCreateWithoutJadwalInput>
  }

  export type LaporanCreateManyJadwalInputEnvelope = {
    data: LaporanCreateManyJadwalInput | LaporanCreateManyJadwalInput[]
    skipDuplicates?: boolean
  }

  export type LaporanUpsertWithWhereUniqueWithoutJadwalInput = {
    where: LaporanWhereUniqueInput
    update: XOR<LaporanUpdateWithoutJadwalInput, LaporanUncheckedUpdateWithoutJadwalInput>
    create: XOR<LaporanCreateWithoutJadwalInput, LaporanUncheckedCreateWithoutJadwalInput>
  }

  export type LaporanUpdateWithWhereUniqueWithoutJadwalInput = {
    where: LaporanWhereUniqueInput
    data: XOR<LaporanUpdateWithoutJadwalInput, LaporanUncheckedUpdateWithoutJadwalInput>
  }

  export type LaporanUpdateManyWithWhereWithoutJadwalInput = {
    where: LaporanScalarWhereInput
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyWithoutJadwalInput>
  }

  export type LaporanScalarWhereInput = {
    AND?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
    OR?: LaporanScalarWhereInput[]
    NOT?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
    id?: IntFilter<"Laporan"> | number
    id_jadwal?: IntFilter<"Laporan"> | number
    foto_ruangan?: StringFilter<"Laporan"> | string
    foto_kerusakan?: StringFilter<"Laporan"> | string
    deskripsi_kerusakan?: StringFilter<"Laporan"> | string
    kerusakan_1?: StringFilter<"Laporan"> | string
    kerusakan_2?: StringFilter<"Laporan"> | string
    kerusakan_3?: StringFilter<"Laporan"> | string
    kerusakan_4?: StringFilter<"Laporan"> | string
    kerusakan_5?: StringFilter<"Laporan"> | string
  }

  export type JadwalCreateWithoutLaporanInput = {
    hari: $Enums.Hari
    lab: $Enums.Lab
    kelas?: $Enums.Kelas
    waktuMulai: Date | string
    waktuSelesai: Date | string
  }

  export type JadwalUncheckedCreateWithoutLaporanInput = {
    id?: number
    hari: $Enums.Hari
    lab: $Enums.Lab
    kelas?: $Enums.Kelas
    waktuMulai: Date | string
    waktuSelesai: Date | string
  }

  export type JadwalCreateOrConnectWithoutLaporanInput = {
    where: JadwalWhereUniqueInput
    create: XOR<JadwalCreateWithoutLaporanInput, JadwalUncheckedCreateWithoutLaporanInput>
  }

  export type JadwalUpsertWithoutLaporanInput = {
    update: XOR<JadwalUpdateWithoutLaporanInput, JadwalUncheckedUpdateWithoutLaporanInput>
    create: XOR<JadwalCreateWithoutLaporanInput, JadwalUncheckedCreateWithoutLaporanInput>
    where?: JadwalWhereInput
  }

  export type JadwalUpdateToOneWithWhereWithoutLaporanInput = {
    where?: JadwalWhereInput
    data: XOR<JadwalUpdateWithoutLaporanInput, JadwalUncheckedUpdateWithoutLaporanInput>
  }

  export type JadwalUpdateWithoutLaporanInput = {
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    lab?: EnumLabFieldUpdateOperationsInput | $Enums.Lab
    kelas?: EnumKelasFieldUpdateOperationsInput | $Enums.Kelas
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalUncheckedUpdateWithoutLaporanInput = {
    id?: IntFieldUpdateOperationsInput | number
    hari?: EnumHariFieldUpdateOperationsInput | $Enums.Hari
    lab?: EnumLabFieldUpdateOperationsInput | $Enums.Lab
    kelas?: EnumKelasFieldUpdateOperationsInput | $Enums.Kelas
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanCreateManyJadwalInput = {
    id?: number
    foto_ruangan: string
    foto_kerusakan: string
    deskripsi_kerusakan: string
    kerusakan_1: string
    kerusakan_2: string
    kerusakan_3: string
    kerusakan_4: string
    kerusakan_5: string
  }

  export type LaporanUpdateWithoutJadwalInput = {
    foto_ruangan?: StringFieldUpdateOperationsInput | string
    foto_kerusakan?: StringFieldUpdateOperationsInput | string
    deskripsi_kerusakan?: StringFieldUpdateOperationsInput | string
    kerusakan_1?: StringFieldUpdateOperationsInput | string
    kerusakan_2?: StringFieldUpdateOperationsInput | string
    kerusakan_3?: StringFieldUpdateOperationsInput | string
    kerusakan_4?: StringFieldUpdateOperationsInput | string
    kerusakan_5?: StringFieldUpdateOperationsInput | string
  }

  export type LaporanUncheckedUpdateWithoutJadwalInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto_ruangan?: StringFieldUpdateOperationsInput | string
    foto_kerusakan?: StringFieldUpdateOperationsInput | string
    deskripsi_kerusakan?: StringFieldUpdateOperationsInput | string
    kerusakan_1?: StringFieldUpdateOperationsInput | string
    kerusakan_2?: StringFieldUpdateOperationsInput | string
    kerusakan_3?: StringFieldUpdateOperationsInput | string
    kerusakan_4?: StringFieldUpdateOperationsInput | string
    kerusakan_5?: StringFieldUpdateOperationsInput | string
  }

  export type LaporanUncheckedUpdateManyWithoutJadwalInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto_ruangan?: StringFieldUpdateOperationsInput | string
    foto_kerusakan?: StringFieldUpdateOperationsInput | string
    deskripsi_kerusakan?: StringFieldUpdateOperationsInput | string
    kerusakan_1?: StringFieldUpdateOperationsInput | string
    kerusakan_2?: StringFieldUpdateOperationsInput | string
    kerusakan_3?: StringFieldUpdateOperationsInput | string
    kerusakan_4?: StringFieldUpdateOperationsInput | string
    kerusakan_5?: StringFieldUpdateOperationsInput | string
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