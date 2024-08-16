/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Company
 *
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>;
/**
 * Model UsersOnCompanies
 *
 */
export type UsersOnCompanies =
  $Result.DefaultSelection<Prisma.$UsersOnCompaniesPayload>;

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof T
    ? T["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

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

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>;

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
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.usersOnCompanies`: Exposes CRUD operations for the **UsersOnCompanies** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UsersOnCompanies
   * const usersOnCompanies = await prisma.usersOnCompanies.findMany()
   * ```
   */
  get usersOnCompanies(): Prisma.UsersOnCompaniesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray
    | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Company: "Company";
    UsersOnCompanies: "UsersOnCompanies";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<this["params"]["extArgs"]>;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    meta: {
      modelProps: "user" | "company" | "usersOnCompanies";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>;
        fields: Prisma.CompanyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[];
          };
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      UsersOnCompanies: {
        payload: Prisma.$UsersOnCompaniesPayload<ExtArgs>;
        fields: Prisma.UsersOnCompaniesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UsersOnCompaniesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersOnCompaniesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UsersOnCompaniesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersOnCompaniesPayload>;
          };
          findFirst: {
            args: Prisma.UsersOnCompaniesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersOnCompaniesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UsersOnCompaniesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersOnCompaniesPayload>;
          };
          findMany: {
            args: Prisma.UsersOnCompaniesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersOnCompaniesPayload>[];
          };
          create: {
            args: Prisma.UsersOnCompaniesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersOnCompaniesPayload>;
          };
          createMany: {
            args: Prisma.UsersOnCompaniesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.UsersOnCompaniesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersOnCompaniesPayload>;
          };
          update: {
            args: Prisma.UsersOnCompaniesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersOnCompaniesPayload>;
          };
          deleteMany: {
            args: Prisma.UsersOnCompaniesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.UsersOnCompaniesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.UsersOnCompaniesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersOnCompaniesPayload>;
          };
          aggregate: {
            args: Prisma.UsersOnCompaniesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUsersOnCompanies>;
          };
          groupBy: {
            args: Prisma.UsersOnCompaniesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UsersOnCompaniesGroupByOutputType>[];
          };
          count: {
            args: Prisma.UsersOnCompaniesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<UsersOnCompaniesCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    companies: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    companies?: boolean | UserCountOutputTypeCountCompaniesArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompaniesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UsersOnCompaniesWhereInput;
  };

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number;
  };

  export type CompanyCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UsersOnCompaniesWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
    followers: number | null;
    following: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
    followers: number | null;
    following: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    backgroundImageUrl: string | null;
    profilePictureUrl: string | null;
    name: string | null;
    title: string | null;
    followers: number | null;
    following: number | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    backgroundImageUrl: string | null;
    profilePictureUrl: string | null;
    name: string | null;
    title: string | null;
    followers: number | null;
    following: number | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    backgroundImageUrl: number;
    profilePictureUrl: number;
    name: number;
    title: number;
    followers: number;
    following: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
    followers?: true;
    following?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
    followers?: true;
    following?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    backgroundImageUrl?: true;
    profilePictureUrl?: true;
    name?: true;
    title?: true;
    followers?: true;
    following?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    backgroundImageUrl?: true;
    profilePictureUrl?: true;
    name?: true;
    title?: true;
    followers?: true;
    following?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    backgroundImageUrl?: true;
    profilePictureUrl?: true;
    name?: true;
    title?: true;
    followers?: true;
    following?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    backgroundImageUrl: string;
    profilePictureUrl: string;
    name: string;
    title: string;
    followers: number;
    following: number;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      backgroundImageUrl?: boolean;
      profilePictureUrl?: boolean;
      name?: boolean;
      title?: boolean;
      followers?: boolean;
      following?: boolean;
      companies?: boolean | User$companiesArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    backgroundImageUrl?: boolean;
    profilePictureUrl?: boolean;
    name?: boolean;
    title?: boolean;
    followers?: boolean;
    following?: boolean;
  };

  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    companies?: boolean | User$companiesArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      companies: Prisma.$UsersOnCompaniesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        backgroundImageUrl: string;
        profilePictureUrl: string;
        name: string;
        title: string;
        followers: number;
        following: number;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
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
     **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

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
     **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

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
     **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">
    >;

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
     **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

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
     **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

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
     **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

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
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    companies<T extends User$companiesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$companiesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UsersOnCompaniesPayload<ExtArgs>,
          T,
          "findMany"
        >
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "Int">;
    readonly backgroundImageUrl: FieldRef<"User", "String">;
    readonly profilePictureUrl: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly title: FieldRef<"User", "String">;
    readonly followers: FieldRef<"User", "Int">;
    readonly following: FieldRef<"User", "Int">;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User.companies
   */
  export type User$companiesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersOnCompanies
     */
    select?: UsersOnCompaniesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnCompaniesInclude<ExtArgs> | null;
    where?: UsersOnCompaniesWhereInput;
    orderBy?:
      | UsersOnCompaniesOrderByWithRelationInput
      | UsersOnCompaniesOrderByWithRelationInput[];
    cursor?: UsersOnCompaniesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | UsersOnCompaniesScalarFieldEnum
      | UsersOnCompaniesScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _avg: CompanyAvgAggregateOutputType | null;
    _sum: CompanySumAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyAvgAggregateOutputType = {
    id: number | null;
  };

  export type CompanySumAggregateOutputType = {
    id: number | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type CompanyAvgAggregateInputType = {
    id?: true;
  };

  export type CompanySumAggregateInputType = {
    id?: true;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CompanyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CompanySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type CompanyGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CompanyWhereInput;
    orderBy?:
      | CompanyOrderByWithAggregationInput
      | CompanyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: CompanyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _avg?: CompanyAvgAggregateInputType;
    _sum?: CompanySumAggregateInputType;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: number;
    name: string;
    _count: CompanyCountAggregateOutputType | null;
    _avg: CompanyAvgAggregateOutputType | null;
    _sum: CompanySumAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CompanyGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CompanyGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
        }
      >
    >;

  export type CompanySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      users?: boolean | Company$usersArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["company"]
  >;

  export type CompanySelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type CompanyInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | Company$usersArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $CompanyPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Company";
    objects: {
      users: Prisma.$UsersOnCompaniesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
      },
      ExtArgs["result"]["company"]
    >;
    composites: {};
  };

  type CompanyGetPayload<
    S extends boolean | null | undefined | CompanyDefaultArgs,
  > = $Result.GetResult<Prisma.$CompanyPayload, S>;

  type CompanyCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CompanyFindManyArgs, "select" | "include" | "distinct"> & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface CompanyDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Company"];
      meta: { name: "Company" };
    };
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends CompanyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends CompanyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends CompanyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends CompanyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Companies.
     *     @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends CompanyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends CompanyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends CompanyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends CompanyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends CompanyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends CompanyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs["orderBy"] }
        : { orderBy?: CompanyGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCompanyGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Company model
     */
    readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    users<T extends Company$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Company$usersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UsersOnCompaniesPayload<ExtArgs>,
          T,
          "findMany"
        >
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", "Int">;
    readonly name: FieldRef<"Company", "String">;
  }

  // Custom InputTypes

  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * Company create
   */
  export type CompanyCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>;
  };

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Company update
   */
  export type CompanyUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>;
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>;
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput;
  };

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput;
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>;
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>;
  };

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput;
  };

  /**
   * Company.users
   */
  export type Company$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersOnCompanies
     */
    select?: UsersOnCompaniesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnCompaniesInclude<ExtArgs> | null;
    where?: UsersOnCompaniesWhereInput;
    orderBy?:
      | UsersOnCompaniesOrderByWithRelationInput
      | UsersOnCompaniesOrderByWithRelationInput[];
    cursor?: UsersOnCompaniesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | UsersOnCompaniesScalarFieldEnum
      | UsersOnCompaniesScalarFieldEnum[];
  };

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null;
  };

  /**
   * Model UsersOnCompanies
   */

  export type AggregateUsersOnCompanies = {
    _count: UsersOnCompaniesCountAggregateOutputType | null;
    _avg: UsersOnCompaniesAvgAggregateOutputType | null;
    _sum: UsersOnCompaniesSumAggregateOutputType | null;
    _min: UsersOnCompaniesMinAggregateOutputType | null;
    _max: UsersOnCompaniesMaxAggregateOutputType | null;
  };

  export type UsersOnCompaniesAvgAggregateOutputType = {
    userId: number | null;
    companyId: number | null;
  };

  export type UsersOnCompaniesSumAggregateOutputType = {
    userId: number | null;
    companyId: number | null;
  };

  export type UsersOnCompaniesMinAggregateOutputType = {
    userId: number | null;
    companyId: number | null;
  };

  export type UsersOnCompaniesMaxAggregateOutputType = {
    userId: number | null;
    companyId: number | null;
  };

  export type UsersOnCompaniesCountAggregateOutputType = {
    userId: number;
    companyId: number;
    _all: number;
  };

  export type UsersOnCompaniesAvgAggregateInputType = {
    userId?: true;
    companyId?: true;
  };

  export type UsersOnCompaniesSumAggregateInputType = {
    userId?: true;
    companyId?: true;
  };

  export type UsersOnCompaniesMinAggregateInputType = {
    userId?: true;
    companyId?: true;
  };

  export type UsersOnCompaniesMaxAggregateInputType = {
    userId?: true;
    companyId?: true;
  };

  export type UsersOnCompaniesCountAggregateInputType = {
    userId?: true;
    companyId?: true;
    _all?: true;
  };

  export type UsersOnCompaniesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UsersOnCompanies to aggregate.
     */
    where?: UsersOnCompaniesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UsersOnCompanies to fetch.
     */
    orderBy?:
      | UsersOnCompaniesOrderByWithRelationInput
      | UsersOnCompaniesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UsersOnCompaniesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UsersOnCompanies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UsersOnCompanies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UsersOnCompanies
     **/
    _count?: true | UsersOnCompaniesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UsersOnCompaniesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UsersOnCompaniesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UsersOnCompaniesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UsersOnCompaniesMaxAggregateInputType;
  };

  export type GetUsersOnCompaniesAggregateType<
    T extends UsersOnCompaniesAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateUsersOnCompanies]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersOnCompanies[P]>
      : GetScalarType<T[P], AggregateUsersOnCompanies[P]>;
  };

  export type UsersOnCompaniesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UsersOnCompaniesWhereInput;
    orderBy?:
      | UsersOnCompaniesOrderByWithAggregationInput
      | UsersOnCompaniesOrderByWithAggregationInput[];
    by: UsersOnCompaniesScalarFieldEnum[] | UsersOnCompaniesScalarFieldEnum;
    having?: UsersOnCompaniesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersOnCompaniesCountAggregateInputType | true;
    _avg?: UsersOnCompaniesAvgAggregateInputType;
    _sum?: UsersOnCompaniesSumAggregateInputType;
    _min?: UsersOnCompaniesMinAggregateInputType;
    _max?: UsersOnCompaniesMaxAggregateInputType;
  };

  export type UsersOnCompaniesGroupByOutputType = {
    userId: number;
    companyId: number;
    _count: UsersOnCompaniesCountAggregateOutputType | null;
    _avg: UsersOnCompaniesAvgAggregateOutputType | null;
    _sum: UsersOnCompaniesSumAggregateOutputType | null;
    _min: UsersOnCompaniesMinAggregateOutputType | null;
    _max: UsersOnCompaniesMaxAggregateOutputType | null;
  };

  type GetUsersOnCompaniesGroupByPayload<
    T extends UsersOnCompaniesGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersOnCompaniesGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof UsersOnCompaniesGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UsersOnCompaniesGroupByOutputType[P]>
          : GetScalarType<T[P], UsersOnCompaniesGroupByOutputType[P]>;
      }
    >
  >;

  export type UsersOnCompaniesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      companyId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["usersOnCompanies"]
  >;

  export type UsersOnCompaniesSelectScalar = {
    userId?: boolean;
    companyId?: boolean;
  };

  export type UsersOnCompaniesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
  };

  export type $UsersOnCompaniesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "UsersOnCompanies";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      company: Prisma.$CompanyPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        userId: number;
        companyId: number;
      },
      ExtArgs["result"]["usersOnCompanies"]
    >;
    composites: {};
  };

  type UsersOnCompaniesGetPayload<
    S extends boolean | null | undefined | UsersOnCompaniesDefaultArgs,
  > = $Result.GetResult<Prisma.$UsersOnCompaniesPayload, S>;

  type UsersOnCompaniesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UsersOnCompaniesFindManyArgs, "select" | "include" | "distinct"> & {
    select?: UsersOnCompaniesCountAggregateInputType | true;
  };

  export interface UsersOnCompaniesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["UsersOnCompanies"];
      meta: { name: "UsersOnCompanies" };
    };
    /**
     * Find zero or one UsersOnCompanies that matches the filter.
     * @param {UsersOnCompaniesFindUniqueArgs} args - Arguments to find a UsersOnCompanies
     * @example
     * // Get one UsersOnCompanies
     * const usersOnCompanies = await prisma.usersOnCompanies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends UsersOnCompaniesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersOnCompaniesFindUniqueArgs<ExtArgs>>,
    ): Prisma__UsersOnCompaniesClient<
      $Result.GetResult<
        Prisma.$UsersOnCompaniesPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one UsersOnCompanies that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {UsersOnCompaniesFindUniqueOrThrowArgs} args - Arguments to find a UsersOnCompanies
     * @example
     * // Get one UsersOnCompanies
     * const usersOnCompanies = await prisma.usersOnCompanies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends UsersOnCompaniesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersOnCompaniesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UsersOnCompaniesClient<
      $Result.GetResult<
        Prisma.$UsersOnCompaniesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first UsersOnCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnCompaniesFindFirstArgs} args - Arguments to find a UsersOnCompanies
     * @example
     * // Get one UsersOnCompanies
     * const usersOnCompanies = await prisma.usersOnCompanies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends UsersOnCompaniesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersOnCompaniesFindFirstArgs<ExtArgs>>,
    ): Prisma__UsersOnCompaniesClient<
      $Result.GetResult<
        Prisma.$UsersOnCompaniesPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first UsersOnCompanies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnCompaniesFindFirstOrThrowArgs} args - Arguments to find a UsersOnCompanies
     * @example
     * // Get one UsersOnCompanies
     * const usersOnCompanies = await prisma.usersOnCompanies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends UsersOnCompaniesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersOnCompaniesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UsersOnCompaniesClient<
      $Result.GetResult<
        Prisma.$UsersOnCompaniesPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more UsersOnCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnCompaniesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersOnCompanies
     * const usersOnCompanies = await prisma.usersOnCompanies.findMany()
     *
     * // Get first 10 UsersOnCompanies
     * const usersOnCompanies = await prisma.usersOnCompanies.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const usersOnCompaniesWithUserIdOnly = await prisma.usersOnCompanies.findMany({ select: { userId: true } })
     *
     **/
    findMany<T extends UsersOnCompaniesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersOnCompaniesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UsersOnCompaniesPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a UsersOnCompanies.
     * @param {UsersOnCompaniesCreateArgs} args - Arguments to create a UsersOnCompanies.
     * @example
     * // Create one UsersOnCompanies
     * const UsersOnCompanies = await prisma.usersOnCompanies.create({
     *   data: {
     *     // ... data to create a UsersOnCompanies
     *   }
     * })
     *
     **/
    create<T extends UsersOnCompaniesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersOnCompaniesCreateArgs<ExtArgs>>,
    ): Prisma__UsersOnCompaniesClient<
      $Result.GetResult<Prisma.$UsersOnCompaniesPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many UsersOnCompanies.
     *     @param {UsersOnCompaniesCreateManyArgs} args - Arguments to create many UsersOnCompanies.
     *     @example
     *     // Create many UsersOnCompanies
     *     const usersOnCompanies = await prisma.usersOnCompanies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends UsersOnCompaniesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersOnCompaniesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a UsersOnCompanies.
     * @param {UsersOnCompaniesDeleteArgs} args - Arguments to delete one UsersOnCompanies.
     * @example
     * // Delete one UsersOnCompanies
     * const UsersOnCompanies = await prisma.usersOnCompanies.delete({
     *   where: {
     *     // ... filter to delete one UsersOnCompanies
     *   }
     * })
     *
     **/
    delete<T extends UsersOnCompaniesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersOnCompaniesDeleteArgs<ExtArgs>>,
    ): Prisma__UsersOnCompaniesClient<
      $Result.GetResult<Prisma.$UsersOnCompaniesPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one UsersOnCompanies.
     * @param {UsersOnCompaniesUpdateArgs} args - Arguments to update one UsersOnCompanies.
     * @example
     * // Update one UsersOnCompanies
     * const usersOnCompanies = await prisma.usersOnCompanies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends UsersOnCompaniesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersOnCompaniesUpdateArgs<ExtArgs>>,
    ): Prisma__UsersOnCompaniesClient<
      $Result.GetResult<Prisma.$UsersOnCompaniesPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more UsersOnCompanies.
     * @param {UsersOnCompaniesDeleteManyArgs} args - Arguments to filter UsersOnCompanies to delete.
     * @example
     * // Delete a few UsersOnCompanies
     * const { count } = await prisma.usersOnCompanies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends UsersOnCompaniesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersOnCompaniesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UsersOnCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnCompaniesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersOnCompanies
     * const usersOnCompanies = await prisma.usersOnCompanies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends UsersOnCompaniesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersOnCompaniesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one UsersOnCompanies.
     * @param {UsersOnCompaniesUpsertArgs} args - Arguments to update or create a UsersOnCompanies.
     * @example
     * // Update or create a UsersOnCompanies
     * const usersOnCompanies = await prisma.usersOnCompanies.upsert({
     *   create: {
     *     // ... data to create a UsersOnCompanies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersOnCompanies we want to update
     *   }
     * })
     **/
    upsert<T extends UsersOnCompaniesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersOnCompaniesUpsertArgs<ExtArgs>>,
    ): Prisma__UsersOnCompaniesClient<
      $Result.GetResult<Prisma.$UsersOnCompaniesPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of UsersOnCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnCompaniesCountArgs} args - Arguments to filter UsersOnCompanies to count.
     * @example
     * // Count the number of UsersOnCompanies
     * const count = await prisma.usersOnCompanies.count({
     *   where: {
     *     // ... the filter for the UsersOnCompanies we want to count
     *   }
     * })
     **/
    count<T extends UsersOnCompaniesCountArgs>(
      args?: Subset<T, UsersOnCompaniesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UsersOnCompaniesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UsersOnCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnCompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersOnCompaniesAggregateArgs>(
      args: Subset<T, UsersOnCompaniesAggregateArgs>,
    ): Prisma.PrismaPromise<GetUsersOnCompaniesAggregateType<T>>;

    /**
     * Group by UsersOnCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnCompaniesGroupByArgs} args - Group by arguments.
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
      T extends UsersOnCompaniesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersOnCompaniesGroupByArgs["orderBy"] }
        : { orderBy?: UsersOnCompaniesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UsersOnCompaniesGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUsersOnCompaniesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UsersOnCompanies model
     */
    readonly fields: UsersOnCompaniesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersOnCompanies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersOnCompaniesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CompanyDefaultArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      | $Result.GetResult<
          Prisma.$CompanyPayload<ExtArgs>,
          T,
          "findUniqueOrThrow"
        >
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UsersOnCompanies model
   */
  interface UsersOnCompaniesFieldRefs {
    readonly userId: FieldRef<"UsersOnCompanies", "Int">;
    readonly companyId: FieldRef<"UsersOnCompanies", "Int">;
  }

  // Custom InputTypes

  /**
   * UsersOnCompanies findUnique
   */
  export type UsersOnCompaniesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersOnCompanies
     */
    select?: UsersOnCompaniesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnCompaniesInclude<ExtArgs> | null;
    /**
     * Filter, which UsersOnCompanies to fetch.
     */
    where: UsersOnCompaniesWhereUniqueInput;
  };

  /**
   * UsersOnCompanies findUniqueOrThrow
   */
  export type UsersOnCompaniesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersOnCompanies
     */
    select?: UsersOnCompaniesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnCompaniesInclude<ExtArgs> | null;
    /**
     * Filter, which UsersOnCompanies to fetch.
     */
    where: UsersOnCompaniesWhereUniqueInput;
  };

  /**
   * UsersOnCompanies findFirst
   */
  export type UsersOnCompaniesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersOnCompanies
     */
    select?: UsersOnCompaniesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnCompaniesInclude<ExtArgs> | null;
    /**
     * Filter, which UsersOnCompanies to fetch.
     */
    where?: UsersOnCompaniesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UsersOnCompanies to fetch.
     */
    orderBy?:
      | UsersOnCompaniesOrderByWithRelationInput
      | UsersOnCompaniesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UsersOnCompanies.
     */
    cursor?: UsersOnCompaniesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UsersOnCompanies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UsersOnCompanies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UsersOnCompanies.
     */
    distinct?:
      | UsersOnCompaniesScalarFieldEnum
      | UsersOnCompaniesScalarFieldEnum[];
  };

  /**
   * UsersOnCompanies findFirstOrThrow
   */
  export type UsersOnCompaniesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersOnCompanies
     */
    select?: UsersOnCompaniesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnCompaniesInclude<ExtArgs> | null;
    /**
     * Filter, which UsersOnCompanies to fetch.
     */
    where?: UsersOnCompaniesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UsersOnCompanies to fetch.
     */
    orderBy?:
      | UsersOnCompaniesOrderByWithRelationInput
      | UsersOnCompaniesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UsersOnCompanies.
     */
    cursor?: UsersOnCompaniesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UsersOnCompanies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UsersOnCompanies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UsersOnCompanies.
     */
    distinct?:
      | UsersOnCompaniesScalarFieldEnum
      | UsersOnCompaniesScalarFieldEnum[];
  };

  /**
   * UsersOnCompanies findMany
   */
  export type UsersOnCompaniesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersOnCompanies
     */
    select?: UsersOnCompaniesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnCompaniesInclude<ExtArgs> | null;
    /**
     * Filter, which UsersOnCompanies to fetch.
     */
    where?: UsersOnCompaniesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UsersOnCompanies to fetch.
     */
    orderBy?:
      | UsersOnCompaniesOrderByWithRelationInput
      | UsersOnCompaniesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UsersOnCompanies.
     */
    cursor?: UsersOnCompaniesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UsersOnCompanies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UsersOnCompanies.
     */
    skip?: number;
    distinct?:
      | UsersOnCompaniesScalarFieldEnum
      | UsersOnCompaniesScalarFieldEnum[];
  };

  /**
   * UsersOnCompanies create
   */
  export type UsersOnCompaniesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersOnCompanies
     */
    select?: UsersOnCompaniesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnCompaniesInclude<ExtArgs> | null;
    /**
     * The data needed to create a UsersOnCompanies.
     */
    data: XOR<
      UsersOnCompaniesCreateInput,
      UsersOnCompaniesUncheckedCreateInput
    >;
  };

  /**
   * UsersOnCompanies createMany
   */
  export type UsersOnCompaniesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UsersOnCompanies.
     */
    data: UsersOnCompaniesCreateManyInput | UsersOnCompaniesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UsersOnCompanies update
   */
  export type UsersOnCompaniesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersOnCompanies
     */
    select?: UsersOnCompaniesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnCompaniesInclude<ExtArgs> | null;
    /**
     * The data needed to update a UsersOnCompanies.
     */
    data: XOR<
      UsersOnCompaniesUpdateInput,
      UsersOnCompaniesUncheckedUpdateInput
    >;
    /**
     * Choose, which UsersOnCompanies to update.
     */
    where: UsersOnCompaniesWhereUniqueInput;
  };

  /**
   * UsersOnCompanies updateMany
   */
  export type UsersOnCompaniesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UsersOnCompanies.
     */
    data: XOR<
      UsersOnCompaniesUpdateManyMutationInput,
      UsersOnCompaniesUncheckedUpdateManyInput
    >;
    /**
     * Filter which UsersOnCompanies to update
     */
    where?: UsersOnCompaniesWhereInput;
  };

  /**
   * UsersOnCompanies upsert
   */
  export type UsersOnCompaniesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersOnCompanies
     */
    select?: UsersOnCompaniesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnCompaniesInclude<ExtArgs> | null;
    /**
     * The filter to search for the UsersOnCompanies to update in case it exists.
     */
    where: UsersOnCompaniesWhereUniqueInput;
    /**
     * In case the UsersOnCompanies found by the `where` argument doesn't exist, create a new UsersOnCompanies with this data.
     */
    create: XOR<
      UsersOnCompaniesCreateInput,
      UsersOnCompaniesUncheckedCreateInput
    >;
    /**
     * In case the UsersOnCompanies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      UsersOnCompaniesUpdateInput,
      UsersOnCompaniesUncheckedUpdateInput
    >;
  };

  /**
   * UsersOnCompanies delete
   */
  export type UsersOnCompaniesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersOnCompanies
     */
    select?: UsersOnCompaniesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnCompaniesInclude<ExtArgs> | null;
    /**
     * Filter which UsersOnCompanies to delete.
     */
    where: UsersOnCompaniesWhereUniqueInput;
  };

  /**
   * UsersOnCompanies deleteMany
   */
  export type UsersOnCompaniesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UsersOnCompanies to delete
     */
    where?: UsersOnCompaniesWhereInput;
  };

  /**
   * UsersOnCompanies without action
   */
  export type UsersOnCompaniesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersOnCompanies
     */
    select?: UsersOnCompaniesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnCompaniesInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    backgroundImageUrl: "backgroundImageUrl";
    profilePictureUrl: "profilePictureUrl";
    name: "name";
    title: "title";
    followers: "followers";
    following: "following";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: "id";
    name: "name";
  };

  export type CompanyScalarFieldEnum =
    (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const UsersOnCompaniesScalarFieldEnum: {
    userId: "userId";
    companyId: "companyId";
  };

  export type UsersOnCompaniesScalarFieldEnum =
    (typeof UsersOnCompaniesScalarFieldEnum)[keyof typeof UsersOnCompaniesScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<"User"> | number;
    backgroundImageUrl?: StringFilter<"User"> | string;
    profilePictureUrl?: StringFilter<"User"> | string;
    name?: StringFilter<"User"> | string;
    title?: StringFilter<"User"> | string;
    followers?: IntFilter<"User"> | number;
    following?: IntFilter<"User"> | number;
    companies?: UsersOnCompaniesListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    backgroundImageUrl?: SortOrder;
    profilePictureUrl?: SortOrder;
    name?: SortOrder;
    title?: SortOrder;
    followers?: SortOrder;
    following?: SortOrder;
    companies?: UsersOnCompaniesOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      backgroundImageUrl?: StringFilter<"User"> | string;
      profilePictureUrl?: StringFilter<"User"> | string;
      name?: StringFilter<"User"> | string;
      title?: StringFilter<"User"> | string;
      followers?: IntFilter<"User"> | number;
      following?: IntFilter<"User"> | number;
      companies?: UsersOnCompaniesListRelationFilter;
    },
    "id"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    backgroundImageUrl?: SortOrder;
    profilePictureUrl?: SortOrder;
    name?: SortOrder;
    title?: SortOrder;
    followers?: SortOrder;
    following?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"User"> | number;
    backgroundImageUrl?: StringWithAggregatesFilter<"User"> | string;
    profilePictureUrl?: StringWithAggregatesFilter<"User"> | string;
    name?: StringWithAggregatesFilter<"User"> | string;
    title?: StringWithAggregatesFilter<"User"> | string;
    followers?: IntWithAggregatesFilter<"User"> | number;
    following?: IntWithAggregatesFilter<"User"> | number;
  };

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[];
    OR?: CompanyWhereInput[];
    NOT?: CompanyWhereInput | CompanyWhereInput[];
    id?: IntFilter<"Company"> | number;
    name?: StringFilter<"Company"> | string;
    users?: UsersOnCompaniesListRelationFilter;
  };

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    users?: UsersOnCompaniesOrderByRelationAggregateInput;
  };

  export type CompanyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CompanyWhereInput | CompanyWhereInput[];
      OR?: CompanyWhereInput[];
      NOT?: CompanyWhereInput | CompanyWhereInput[];
      name?: StringFilter<"Company"> | string;
      users?: UsersOnCompaniesListRelationFilter;
    },
    "id"
  >;

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    _count?: CompanyCountOrderByAggregateInput;
    _avg?: CompanyAvgOrderByAggregateInput;
    _max?: CompanyMaxOrderByAggregateInput;
    _min?: CompanyMinOrderByAggregateInput;
    _sum?: CompanySumOrderByAggregateInput;
  };

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?:
      | CompanyScalarWhereWithAggregatesInput
      | CompanyScalarWhereWithAggregatesInput[];
    OR?: CompanyScalarWhereWithAggregatesInput[];
    NOT?:
      | CompanyScalarWhereWithAggregatesInput
      | CompanyScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Company"> | number;
    name?: StringWithAggregatesFilter<"Company"> | string;
  };

  export type UsersOnCompaniesWhereInput = {
    AND?: UsersOnCompaniesWhereInput | UsersOnCompaniesWhereInput[];
    OR?: UsersOnCompaniesWhereInput[];
    NOT?: UsersOnCompaniesWhereInput | UsersOnCompaniesWhereInput[];
    userId?: IntFilter<"UsersOnCompanies"> | number;
    companyId?: IntFilter<"UsersOnCompanies"> | number;
    user?: XOR<UserRelationFilter, UserWhereInput>;
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>;
  };

  export type UsersOnCompaniesOrderByWithRelationInput = {
    userId?: SortOrder;
    companyId?: SortOrder;
    user?: UserOrderByWithRelationInput;
    company?: CompanyOrderByWithRelationInput;
  };

  export type UsersOnCompaniesWhereUniqueInput = Prisma.AtLeast<
    {
      userId_companyId?: UsersOnCompaniesUserIdCompanyIdCompoundUniqueInput;
      AND?: UsersOnCompaniesWhereInput | UsersOnCompaniesWhereInput[];
      OR?: UsersOnCompaniesWhereInput[];
      NOT?: UsersOnCompaniesWhereInput | UsersOnCompaniesWhereInput[];
      userId?: IntFilter<"UsersOnCompanies"> | number;
      companyId?: IntFilter<"UsersOnCompanies"> | number;
      user?: XOR<UserRelationFilter, UserWhereInput>;
      company?: XOR<CompanyRelationFilter, CompanyWhereInput>;
    },
    "userId_companyId"
  >;

  export type UsersOnCompaniesOrderByWithAggregationInput = {
    userId?: SortOrder;
    companyId?: SortOrder;
    _count?: UsersOnCompaniesCountOrderByAggregateInput;
    _avg?: UsersOnCompaniesAvgOrderByAggregateInput;
    _max?: UsersOnCompaniesMaxOrderByAggregateInput;
    _min?: UsersOnCompaniesMinOrderByAggregateInput;
    _sum?: UsersOnCompaniesSumOrderByAggregateInput;
  };

  export type UsersOnCompaniesScalarWhereWithAggregatesInput = {
    AND?:
      | UsersOnCompaniesScalarWhereWithAggregatesInput
      | UsersOnCompaniesScalarWhereWithAggregatesInput[];
    OR?: UsersOnCompaniesScalarWhereWithAggregatesInput[];
    NOT?:
      | UsersOnCompaniesScalarWhereWithAggregatesInput
      | UsersOnCompaniesScalarWhereWithAggregatesInput[];
    userId?: IntWithAggregatesFilter<"UsersOnCompanies"> | number;
    companyId?: IntWithAggregatesFilter<"UsersOnCompanies"> | number;
  };

  export type UserCreateInput = {
    backgroundImageUrl: string;
    profilePictureUrl: string;
    name: string;
    title: string;
    followers: number;
    following: number;
    companies?: UsersOnCompaniesCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    backgroundImageUrl: string;
    profilePictureUrl: string;
    name: string;
    title: string;
    followers: number;
    following: number;
    companies?: UsersOnCompaniesUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    backgroundImageUrl?: StringFieldUpdateOperationsInput | string;
    profilePictureUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    followers?: IntFieldUpdateOperationsInput | number;
    following?: IntFieldUpdateOperationsInput | number;
    companies?: UsersOnCompaniesUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    backgroundImageUrl?: StringFieldUpdateOperationsInput | string;
    profilePictureUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    followers?: IntFieldUpdateOperationsInput | number;
    following?: IntFieldUpdateOperationsInput | number;
    companies?: UsersOnCompaniesUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    backgroundImageUrl: string;
    profilePictureUrl: string;
    name: string;
    title: string;
    followers: number;
    following: number;
  };

  export type UserUpdateManyMutationInput = {
    backgroundImageUrl?: StringFieldUpdateOperationsInput | string;
    profilePictureUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    followers?: IntFieldUpdateOperationsInput | number;
    following?: IntFieldUpdateOperationsInput | number;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    backgroundImageUrl?: StringFieldUpdateOperationsInput | string;
    profilePictureUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    followers?: IntFieldUpdateOperationsInput | number;
    following?: IntFieldUpdateOperationsInput | number;
  };

  export type CompanyCreateInput = {
    name: string;
    users?: UsersOnCompaniesCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateInput = {
    id?: number;
    name: string;
    users?: UsersOnCompaniesUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    users?: UsersOnCompaniesUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    users?: UsersOnCompaniesUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyCreateManyInput = {
    id?: number;
    name: string;
  };

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type UsersOnCompaniesCreateInput = {
    user: UserCreateNestedOneWithoutCompaniesInput;
    company: CompanyCreateNestedOneWithoutUsersInput;
  };

  export type UsersOnCompaniesUncheckedCreateInput = {
    userId: number;
    companyId: number;
  };

  export type UsersOnCompaniesUpdateInput = {
    user?: UserUpdateOneRequiredWithoutCompaniesNestedInput;
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type UsersOnCompaniesUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
  };

  export type UsersOnCompaniesCreateManyInput = {
    userId: number;
    companyId: number;
  };

  export type UsersOnCompaniesUpdateManyMutationInput = {};

  export type UsersOnCompaniesUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type UsersOnCompaniesListRelationFilter = {
    every?: UsersOnCompaniesWhereInput;
    some?: UsersOnCompaniesWhereInput;
    none?: UsersOnCompaniesWhereInput;
  };

  export type UsersOnCompaniesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    backgroundImageUrl?: SortOrder;
    profilePictureUrl?: SortOrder;
    name?: SortOrder;
    title?: SortOrder;
    followers?: SortOrder;
    following?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
    followers?: SortOrder;
    following?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    backgroundImageUrl?: SortOrder;
    profilePictureUrl?: SortOrder;
    name?: SortOrder;
    title?: SortOrder;
    followers?: SortOrder;
    following?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    backgroundImageUrl?: SortOrder;
    profilePictureUrl?: SortOrder;
    name?: SortOrder;
    title?: SortOrder;
    followers?: SortOrder;
    following?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
    followers?: SortOrder;
    following?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput;
    isNot?: CompanyWhereInput;
  };

  export type UsersOnCompaniesUserIdCompanyIdCompoundUniqueInput = {
    userId: number;
    companyId: number;
  };

  export type UsersOnCompaniesCountOrderByAggregateInput = {
    userId?: SortOrder;
    companyId?: SortOrder;
  };

  export type UsersOnCompaniesAvgOrderByAggregateInput = {
    userId?: SortOrder;
    companyId?: SortOrder;
  };

  export type UsersOnCompaniesMaxOrderByAggregateInput = {
    userId?: SortOrder;
    companyId?: SortOrder;
  };

  export type UsersOnCompaniesMinOrderByAggregateInput = {
    userId?: SortOrder;
    companyId?: SortOrder;
  };

  export type UsersOnCompaniesSumOrderByAggregateInput = {
    userId?: SortOrder;
    companyId?: SortOrder;
  };

  export type UsersOnCompaniesCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UsersOnCompaniesCreateWithoutUserInput,
          UsersOnCompaniesUncheckedCreateWithoutUserInput
        >
      | UsersOnCompaniesCreateWithoutUserInput[]
      | UsersOnCompaniesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UsersOnCompaniesCreateOrConnectWithoutUserInput
      | UsersOnCompaniesCreateOrConnectWithoutUserInput[];
    createMany?: UsersOnCompaniesCreateManyUserInputEnvelope;
    connect?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
  };

  export type UsersOnCompaniesUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UsersOnCompaniesCreateWithoutUserInput,
          UsersOnCompaniesUncheckedCreateWithoutUserInput
        >
      | UsersOnCompaniesCreateWithoutUserInput[]
      | UsersOnCompaniesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UsersOnCompaniesCreateOrConnectWithoutUserInput
      | UsersOnCompaniesCreateOrConnectWithoutUserInput[];
    createMany?: UsersOnCompaniesCreateManyUserInputEnvelope;
    connect?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UsersOnCompaniesUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UsersOnCompaniesCreateWithoutUserInput,
          UsersOnCompaniesUncheckedCreateWithoutUserInput
        >
      | UsersOnCompaniesCreateWithoutUserInput[]
      | UsersOnCompaniesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UsersOnCompaniesCreateOrConnectWithoutUserInput
      | UsersOnCompaniesCreateOrConnectWithoutUserInput[];
    upsert?:
      | UsersOnCompaniesUpsertWithWhereUniqueWithoutUserInput
      | UsersOnCompaniesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UsersOnCompaniesCreateManyUserInputEnvelope;
    set?: UsersOnCompaniesWhereUniqueInput | UsersOnCompaniesWhereUniqueInput[];
    disconnect?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
    delete?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
    connect?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
    update?:
      | UsersOnCompaniesUpdateWithWhereUniqueWithoutUserInput
      | UsersOnCompaniesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UsersOnCompaniesUpdateManyWithWhereWithoutUserInput
      | UsersOnCompaniesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | UsersOnCompaniesScalarWhereInput
      | UsersOnCompaniesScalarWhereInput[];
  };

  export type UsersOnCompaniesUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UsersOnCompaniesCreateWithoutUserInput,
          UsersOnCompaniesUncheckedCreateWithoutUserInput
        >
      | UsersOnCompaniesCreateWithoutUserInput[]
      | UsersOnCompaniesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UsersOnCompaniesCreateOrConnectWithoutUserInput
      | UsersOnCompaniesCreateOrConnectWithoutUserInput[];
    upsert?:
      | UsersOnCompaniesUpsertWithWhereUniqueWithoutUserInput
      | UsersOnCompaniesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UsersOnCompaniesCreateManyUserInputEnvelope;
    set?: UsersOnCompaniesWhereUniqueInput | UsersOnCompaniesWhereUniqueInput[];
    disconnect?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
    delete?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
    connect?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
    update?:
      | UsersOnCompaniesUpdateWithWhereUniqueWithoutUserInput
      | UsersOnCompaniesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UsersOnCompaniesUpdateManyWithWhereWithoutUserInput
      | UsersOnCompaniesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | UsersOnCompaniesScalarWhereInput
      | UsersOnCompaniesScalarWhereInput[];
  };

  export type UsersOnCompaniesCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          UsersOnCompaniesCreateWithoutCompanyInput,
          UsersOnCompaniesUncheckedCreateWithoutCompanyInput
        >
      | UsersOnCompaniesCreateWithoutCompanyInput[]
      | UsersOnCompaniesUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | UsersOnCompaniesCreateOrConnectWithoutCompanyInput
      | UsersOnCompaniesCreateOrConnectWithoutCompanyInput[];
    createMany?: UsersOnCompaniesCreateManyCompanyInputEnvelope;
    connect?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
  };

  export type UsersOnCompaniesUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          UsersOnCompaniesCreateWithoutCompanyInput,
          UsersOnCompaniesUncheckedCreateWithoutCompanyInput
        >
      | UsersOnCompaniesCreateWithoutCompanyInput[]
      | UsersOnCompaniesUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | UsersOnCompaniesCreateOrConnectWithoutCompanyInput
      | UsersOnCompaniesCreateOrConnectWithoutCompanyInput[];
    createMany?: UsersOnCompaniesCreateManyCompanyInputEnvelope;
    connect?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
  };

  export type UsersOnCompaniesUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          UsersOnCompaniesCreateWithoutCompanyInput,
          UsersOnCompaniesUncheckedCreateWithoutCompanyInput
        >
      | UsersOnCompaniesCreateWithoutCompanyInput[]
      | UsersOnCompaniesUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | UsersOnCompaniesCreateOrConnectWithoutCompanyInput
      | UsersOnCompaniesCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | UsersOnCompaniesUpsertWithWhereUniqueWithoutCompanyInput
      | UsersOnCompaniesUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: UsersOnCompaniesCreateManyCompanyInputEnvelope;
    set?: UsersOnCompaniesWhereUniqueInput | UsersOnCompaniesWhereUniqueInput[];
    disconnect?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
    delete?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
    connect?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
    update?:
      | UsersOnCompaniesUpdateWithWhereUniqueWithoutCompanyInput
      | UsersOnCompaniesUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | UsersOnCompaniesUpdateManyWithWhereWithoutCompanyInput
      | UsersOnCompaniesUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?:
      | UsersOnCompaniesScalarWhereInput
      | UsersOnCompaniesScalarWhereInput[];
  };

  export type UsersOnCompaniesUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          UsersOnCompaniesCreateWithoutCompanyInput,
          UsersOnCompaniesUncheckedCreateWithoutCompanyInput
        >
      | UsersOnCompaniesCreateWithoutCompanyInput[]
      | UsersOnCompaniesUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | UsersOnCompaniesCreateOrConnectWithoutCompanyInput
      | UsersOnCompaniesCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | UsersOnCompaniesUpsertWithWhereUniqueWithoutCompanyInput
      | UsersOnCompaniesUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: UsersOnCompaniesCreateManyCompanyInputEnvelope;
    set?: UsersOnCompaniesWhereUniqueInput | UsersOnCompaniesWhereUniqueInput[];
    disconnect?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
    delete?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
    connect?:
      | UsersOnCompaniesWhereUniqueInput
      | UsersOnCompaniesWhereUniqueInput[];
    update?:
      | UsersOnCompaniesUpdateWithWhereUniqueWithoutCompanyInput
      | UsersOnCompaniesUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | UsersOnCompaniesUpdateManyWithWhereWithoutCompanyInput
      | UsersOnCompaniesUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?:
      | UsersOnCompaniesScalarWhereInput
      | UsersOnCompaniesScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<
      UserCreateWithoutCompaniesInput,
      UserUncheckedCreateWithoutCompaniesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput;
    connect?: UserWhereUniqueInput;
  };

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      CompanyCreateWithoutUsersInput,
      CompanyUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput;
    connect?: CompanyWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<
      UserCreateWithoutCompaniesInput,
      UserUncheckedCreateWithoutCompaniesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput;
    upsert?: UserUpsertWithoutCompaniesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCompaniesInput,
        UserUpdateWithoutCompaniesInput
      >,
      UserUncheckedUpdateWithoutCompaniesInput
    >;
  };

  export type CompanyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<
      CompanyCreateWithoutUsersInput,
      CompanyUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput;
    upsert?: CompanyUpsertWithoutUsersInput;
    connect?: CompanyWhereUniqueInput;
    update?: XOR<
      XOR<
        CompanyUpdateToOneWithWhereWithoutUsersInput,
        CompanyUpdateWithoutUsersInput
      >,
      CompanyUncheckedUpdateWithoutUsersInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type UsersOnCompaniesCreateWithoutUserInput = {
    company: CompanyCreateNestedOneWithoutUsersInput;
  };

  export type UsersOnCompaniesUncheckedCreateWithoutUserInput = {
    companyId: number;
  };

  export type UsersOnCompaniesCreateOrConnectWithoutUserInput = {
    where: UsersOnCompaniesWhereUniqueInput;
    create: XOR<
      UsersOnCompaniesCreateWithoutUserInput,
      UsersOnCompaniesUncheckedCreateWithoutUserInput
    >;
  };

  export type UsersOnCompaniesCreateManyUserInputEnvelope = {
    data:
      | UsersOnCompaniesCreateManyUserInput
      | UsersOnCompaniesCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type UsersOnCompaniesUpsertWithWhereUniqueWithoutUserInput = {
    where: UsersOnCompaniesWhereUniqueInput;
    update: XOR<
      UsersOnCompaniesUpdateWithoutUserInput,
      UsersOnCompaniesUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      UsersOnCompaniesCreateWithoutUserInput,
      UsersOnCompaniesUncheckedCreateWithoutUserInput
    >;
  };

  export type UsersOnCompaniesUpdateWithWhereUniqueWithoutUserInput = {
    where: UsersOnCompaniesWhereUniqueInput;
    data: XOR<
      UsersOnCompaniesUpdateWithoutUserInput,
      UsersOnCompaniesUncheckedUpdateWithoutUserInput
    >;
  };

  export type UsersOnCompaniesUpdateManyWithWhereWithoutUserInput = {
    where: UsersOnCompaniesScalarWhereInput;
    data: XOR<
      UsersOnCompaniesUpdateManyMutationInput,
      UsersOnCompaniesUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type UsersOnCompaniesScalarWhereInput = {
    AND?: UsersOnCompaniesScalarWhereInput | UsersOnCompaniesScalarWhereInput[];
    OR?: UsersOnCompaniesScalarWhereInput[];
    NOT?: UsersOnCompaniesScalarWhereInput | UsersOnCompaniesScalarWhereInput[];
    userId?: IntFilter<"UsersOnCompanies"> | number;
    companyId?: IntFilter<"UsersOnCompanies"> | number;
  };

  export type UsersOnCompaniesCreateWithoutCompanyInput = {
    user: UserCreateNestedOneWithoutCompaniesInput;
  };

  export type UsersOnCompaniesUncheckedCreateWithoutCompanyInput = {
    userId: number;
  };

  export type UsersOnCompaniesCreateOrConnectWithoutCompanyInput = {
    where: UsersOnCompaniesWhereUniqueInput;
    create: XOR<
      UsersOnCompaniesCreateWithoutCompanyInput,
      UsersOnCompaniesUncheckedCreateWithoutCompanyInput
    >;
  };

  export type UsersOnCompaniesCreateManyCompanyInputEnvelope = {
    data:
      | UsersOnCompaniesCreateManyCompanyInput
      | UsersOnCompaniesCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type UsersOnCompaniesUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UsersOnCompaniesWhereUniqueInput;
    update: XOR<
      UsersOnCompaniesUpdateWithoutCompanyInput,
      UsersOnCompaniesUncheckedUpdateWithoutCompanyInput
    >;
    create: XOR<
      UsersOnCompaniesCreateWithoutCompanyInput,
      UsersOnCompaniesUncheckedCreateWithoutCompanyInput
    >;
  };

  export type UsersOnCompaniesUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UsersOnCompaniesWhereUniqueInput;
    data: XOR<
      UsersOnCompaniesUpdateWithoutCompanyInput,
      UsersOnCompaniesUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type UsersOnCompaniesUpdateManyWithWhereWithoutCompanyInput = {
    where: UsersOnCompaniesScalarWhereInput;
    data: XOR<
      UsersOnCompaniesUpdateManyMutationInput,
      UsersOnCompaniesUncheckedUpdateManyWithoutCompanyInput
    >;
  };

  export type UserCreateWithoutCompaniesInput = {
    backgroundImageUrl: string;
    profilePictureUrl: string;
    name: string;
    title: string;
    followers: number;
    following: number;
  };

  export type UserUncheckedCreateWithoutCompaniesInput = {
    id?: number;
    backgroundImageUrl: string;
    profilePictureUrl: string;
    name: string;
    title: string;
    followers: number;
    following: number;
  };

  export type UserCreateOrConnectWithoutCompaniesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCompaniesInput,
      UserUncheckedCreateWithoutCompaniesInput
    >;
  };

  export type CompanyCreateWithoutUsersInput = {
    name: string;
  };

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: number;
    name: string;
  };

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutUsersInput,
      CompanyUncheckedCreateWithoutUsersInput
    >;
  };

  export type UserUpsertWithoutCompaniesInput = {
    update: XOR<
      UserUpdateWithoutCompaniesInput,
      UserUncheckedUpdateWithoutCompaniesInput
    >;
    create: XOR<
      UserCreateWithoutCompaniesInput,
      UserUncheckedCreateWithoutCompaniesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCompaniesInput,
      UserUncheckedUpdateWithoutCompaniesInput
    >;
  };

  export type UserUpdateWithoutCompaniesInput = {
    backgroundImageUrl?: StringFieldUpdateOperationsInput | string;
    profilePictureUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    followers?: IntFieldUpdateOperationsInput | number;
    following?: IntFieldUpdateOperationsInput | number;
  };

  export type UserUncheckedUpdateWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    backgroundImageUrl?: StringFieldUpdateOperationsInput | string;
    profilePictureUrl?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    followers?: IntFieldUpdateOperationsInput | number;
    following?: IntFieldUpdateOperationsInput | number;
  };

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<
      CompanyUpdateWithoutUsersInput,
      CompanyUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      CompanyCreateWithoutUsersInput,
      CompanyUncheckedCreateWithoutUsersInput
    >;
    where?: CompanyWhereInput;
  };

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput;
    data: XOR<
      CompanyUpdateWithoutUsersInput,
      CompanyUncheckedUpdateWithoutUsersInput
    >;
  };

  export type CompanyUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type UsersOnCompaniesCreateManyUserInput = {
    companyId: number;
  };

  export type UsersOnCompaniesUpdateWithoutUserInput = {
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type UsersOnCompaniesUncheckedUpdateWithoutUserInput = {
    companyId?: IntFieldUpdateOperationsInput | number;
  };

  export type UsersOnCompaniesUncheckedUpdateManyWithoutUserInput = {
    companyId?: IntFieldUpdateOperationsInput | number;
  };

  export type UsersOnCompaniesCreateManyCompanyInput = {
    userId: number;
  };

  export type UsersOnCompaniesUpdateWithoutCompanyInput = {
    user?: UserUpdateOneRequiredWithoutCompaniesNestedInput;
  };

  export type UsersOnCompaniesUncheckedUpdateWithoutCompanyInput = {
    userId?: IntFieldUpdateOperationsInput | number;
  };

  export type UsersOnCompaniesUncheckedUpdateManyWithoutCompanyInput = {
    userId?: IntFieldUpdateOperationsInput | number;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserDefaultArgs instead
   */
  export type UserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CompanyDefaultArgs instead
   */
  export type CompanyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = CompanyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UsersOnCompaniesDefaultArgs instead
   */
  export type UsersOnCompaniesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UsersOnCompaniesDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
