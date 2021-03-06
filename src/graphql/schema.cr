# `SCHEMA` represents the GraphQL schema
#
# This is where everything comes together for querying.
#
# More information can be found (here)[https://github.com/ziprandom/graphql-crystal]
#
# Available GraphQL types include:
# String, Boolean, Int, Float, ID
module Ignibase::Schema
  include QueryType
  include MutationType
  include ::GraphQL::Schema

  SCHEMA = GraphQL::Schema.from_schema(
    %{
      schema {
        query: QueryType,
        mutation: MutationType
      }

      type QueryType {
        users: [UserType]
        user(
          email: String!
          preferences: String
          first_name: String
          last_name: String
        ): UserType
      }

      type MutationType {}

      type UserType {
        email: String
        preferences: String
        first_name: String
        last_name: String
      }
    }
  )
  SCHEMA.query_resolver = QueryType
  SCHEMA.mutation_resolver = MutationType
end
