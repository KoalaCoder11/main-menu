@namespace
class SpriteKind:
    Selector = SpriteKind.create()

def on_overlap_tile(sprite, location):
    global chase_game
    chase_game = game.ask("Do you want to play a chase game?")
    if chase_game:
        game.splash("OK, now you will go play the chase game!")
    else:
        tiles.place_on_random_tile(woof, sprites.dungeon.collectible_insignia)
scene.on_overlap_tile(SpriteKind.Selector,
    sprites.dungeon.green_inner_south_west,
    on_overlap_tile)

def on_overlap_tile2(sprite5, location5):
    global zodiac_game
    zodiac_game = game.ask("Do you want to learn your astrological zodiac sign?")
    if zodiac_game:
        game.splash("OK, now you will go play the zodiac-guesser game!")
    else:
        tiles.place_on_random_tile(woof, sprites.dungeon.collectible_insignia)
scene.on_overlap_tile(SpriteKind.Selector,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile2)

def on_overlap_tile3(sprite6, location6):
    global zodiac_game
    zodiac_game = game.ask("Do you want to learn your astrological zodiac sign?")
    if zodiac_game:
        game.splash("OK, now you will go play the zodiac-guesser game!")
    else:
        tiles.place_on_random_tile(woof, sprites.dungeon.collectible_insignia)
scene.on_overlap_tile(SpriteKind.Selector,
    sprites.dungeon.collectible_blue_crystal,
    on_overlap_tile3)

def on_overlap_tile4(sprite2, location2):
    global shooter_game
    shooter_game = game.ask("Do you want to play an alien-shooter game?")
    if shooter_game:
        game.splash("OK, now you will go play the alien-shooter game!")
    else:
        tiles.place_on_random_tile(woof, sprites.dungeon.collectible_insignia)
scene.on_overlap_tile(SpriteKind.Selector,
    sprites.dungeon.purple_inner_south_west,
    on_overlap_tile4)

def on_overlap_tile5(sprite3, location3):
    global shooter_game
    shooter_game = game.ask("Do you want to play an alien-shooter game?")
    if shooter_game:
        game.splash("OK, now you will go play the alien-shooter game!")
    else:
        tiles.place_on_random_tile(woof, sprites.dungeon.collectible_insignia)
scene.on_overlap_tile(SpriteKind.Selector,
    sprites.dungeon.purple_inner_south_east,
    on_overlap_tile5)

def on_overlap_tile6(sprite4, location4):
    global chase_game
    chase_game = game.ask("Do you want to play a chase game?")
    if chase_game:
        game.splash("OK, now you will go play the chase game!")
    else:
        tiles.place_on_random_tile(woof, sprites.dungeon.collectible_insignia)
scene.on_overlap_tile(SpriteKind.Selector,
    sprites.dungeon.green_inner_south_east,
    on_overlap_tile6)

shooter_game = False
zodiac_game = False
chase_game = False
woof: Sprite = None
tiles.set_current_tilemap(tilemap("""
    main_menu
"""))
woof = sprites.create(assets.image("""
    woof
"""), SpriteKind.Selector)
tiles.place_on_random_tile(woof, sprites.dungeon.collectible_insignia)
controller.move_sprite(woof, 100, 100)
scene.camera_follow_sprite(woof)