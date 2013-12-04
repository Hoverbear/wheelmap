Wheelmap.IndexRoute = Ember.Route.extend
  boundsRatioBuffer: 0.41

  setupController: (controller, model, queryParams)->
    @setupMapController(@controllerFor('map'), queryParams)
    @setupToolbarController(@controllerFor('toolbar'), queryParams)

  setupMapController: (controller, queryParams)->
    properties = {}

    if queryParams.lat? && queryParams.lon?
      properties.center = new L.LatLng(queryParams.lat, queryParams.lon)

    if queryParams.zoom?
      properties.zoom = parseInt(queryParams.zoom, 10)

    controller.setProperties(properties)

  setupToolbarController: (controller, queryParams)->
    properties = {}

    if queryParams.q?
      properties.searchString = queryParams.q

    if queryParams.status?
      statusFilters = []

      if queryParams.status isnt true
        statusFilters = queryParams.status.split(',')

      properties.activeStatusFilters = statusFilters

    controller.setProperties(properties)

    @store.findAll('category').then (categories)->
      controller.set('content', categories)

      if queryParams.categories?
        activeCategoryIdentifiers = queryParams.categories.split(',')

        controller.forEach (category) ->
          category.set('isActive', activeCategoryIdentifiers.contains(category.get('identifier')))