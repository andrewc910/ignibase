abstract class ApplicationRecord < Jennifer::Model::Base
  with_timestamps
  mapping(
    id: Primary32,
    created_at: {type: Time, null: true},
    updated_at: {type: Time, null: true},
  )
end
